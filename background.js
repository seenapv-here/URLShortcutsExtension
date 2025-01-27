chrome.omnibox.onInputEntered.addListener((text) => {
    // Get the shortcut and match it with the defined URL
    chrome.storage.sync.get(['shortcuts'], (result) => {
      const shortcuts = result.shortcuts || {};
  
      // Check if the text matches any shortcut
      const url = shortcuts[text.trim()];
  
      if (url) {
        // Redirect to the corresponding URL
        chrome.tabs.create({ url });
      } else {
        // Handle case when shortcut doesn't match
        console.log('No matching shortcut found for:', text);
      }
    });
  });
  