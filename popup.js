const shortcutInput = document.getElementById('shortcut');
const urlInput = document.getElementById('url');
const addShortcutButton = document.getElementById('addShortcut');
const shortcutsList = document.getElementById('shortcutsList');

// Load saved shortcuts
chrome.storage.sync.get(['shortcuts'], (result) => {
  const shortcuts = result.shortcuts || {};
  renderShortcuts(shortcuts);
});

// Add shortcut
addShortcutButton.addEventListener('click', () => {
  const shortcut = shortcutInput.value.trim();
  const url = urlInput.value.trim();

  if (shortcut && url) {
    chrome.storage.sync.get(['shortcuts'], (result) => {
      const shortcuts = result.shortcuts || {};
      shortcuts[shortcut] = url;

      chrome.storage.sync.set({ shortcuts }, () => {
        renderShortcuts(shortcuts);
        shortcutInput.value = '';
        urlInput.value = '';
      });
    });
  }
});

// Render shortcuts
function renderShortcuts(shortcuts) {
  shortcutsList.innerHTML = '';
  for (const [shortcut, url] of Object.entries(shortcuts)) {
    const li = document.createElement('li');
    li.textContent = `${shortcut} → ${url}`;
    shortcutsList.appendChild(li);
  }
}
