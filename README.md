# URL Shortcuts Chrome Extension

This Chrome extension enhances web navigation by enabling users to define custom URL shortcuts for quick access to their favorite websites. The extension also supports advanced features like categories for organizing shortcuts and suggestions based on browsing history.

---

## Features

### Core Features
- **Shortcut Management**:
  - Create, edit, and delete URL shortcuts.
  - Validate inputs to prevent conflicts.
- **URL Redirection**:
  - Instant redirection when a valid shortcut is entered in the Omnibox (address bar).
  - Supports complex URL patterns with placeholders.
- **User Interface**:
  - Intuitive popup interface for managing shortcuts.
  - Group shortcuts by categories or tags for better organization.

### Advanced Features
- **Default Shortcuts**:
  - Pre-configured shortcuts for popular websites (e.g., Google, YouTube).
- **Categories and Tags**:
  - Organize shortcuts into categories for easier access.
- **Shortcut Suggestions**:
  - Dynamic suggestions based on recent browsing history.

---

## Installation

1. **Download the Extension**:
   - Clone this repository or download it as a ZIP file.

     ```bash
     git clone https://github.com/seenapv-here/url-shortcuts-extension.git
     ```

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle at the top right).
   - Click **Load unpacked** and select the project folder.

3. **Start Using**:
   - The extension icon will appear in the Chrome toolbar.
   - Click the icon to open the popup and manage shortcuts.

---

## Usage

### Adding Shortcuts
1. Click the extension icon to open the popup.
2. Enter a shortcut (e.g., `g`) and the corresponding full URL (e.g., `https://www.google.com`).
3. Select a category from the dropdown (optional).
4. Click **Add Shortcut**.

### Using Shortcuts
1. Open a new tab in Chrome.
2. Type the shortcut in the Omnibox (e.g., `shortcut g`) and press **Enter**.
3. Chrome will redirect you to the full URL.

### Browsing History Suggestions
- Start typing in the shortcut or URL field to see suggestions based on your browsing history.
- Click a suggestion to pre-fill the fields.

### Managing Shortcuts
- View shortcuts grouped by category in the popup.
- Edit or delete shortcuts directly from the list.

---

## Development

### File Structure
```
URLShortcutsExtension/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
├── manifest.json
├── popup.html
├── popup.js
├── background.js
└── README.md
```

### Key Files
- **`manifest.json`**:
  - Configuration file defining permissions, Omnibox integration, and UI elements.
- **`popup.html`**:
  - HTML file for the popup interface.
- **`popup.js`**:
  - JavaScript logic for managing shortcuts in the popup.
- **`background.js`**:
  - Handles Omnibox input and redirection logic.

---

## Permissions
The extension requires the following permissions:
- **`storage`**: To save and retrieve shortcuts.
- **`tabs`**: To redirect users to the specified URLs.
- **`history`**: To fetch browsing history for suggestions.

---

## Future Enhancements
1. **Analytics**:
   - Track shortcut usage for insights and recommendations.
2. **Export/Import**:
   - Allow users to export and import shortcuts as a JSON file.
3. **Dynamic Search Parameters**:
   - Enable placeholders for dynamic values (e.g., `yt cats` → `https://youtube.com/results?search_query=cats`).
4. **Customizable Omnibox Keyword**:
   - Let users define their own keyword for the Omnibox.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## Contact
For questions or support, please reach out via:
- **Email**: seenapv@example.com
- **GitHub Issues**: [GitHub Issues Page](https://github.com/seenapv-here/url-shortcuts-extension/issues)

