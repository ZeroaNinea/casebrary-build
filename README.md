# Casebrary

<img src="./logo.svg" width="120" height="120" />

The link to the original repository: https://github.com/ZeroaNinea/casebrary

## Installation Guide

### Firefox

Firefox doesn't allow you to permanently install extensions not from the official store. But you can still install it as a temporary add-on.

Here is the instllation guide for Firefox.

1. Download this repository and extract the `v1.0.0/firefox-mv2` folder.
2. Open Firefox and click on the **puzzle** icon on the top-right corner, or follow this link in firefox: `about:addons`
3. Then click on the button with a **gear** icon, and click on the option **Debug Add-ons**. It should redirect you to the `about:debugging#/runtime/this-firefox` page.
4. Now click on the button **Load Temporary Add-on...**.
5. And finally specify the path to the `manifest.json` file.

Firefox will automatically remove the extension, when you close the browser.

### Chrome

Google Chrome allows you to load unpacked extensions in Developer Mode.

1. Download the latest release and extract the `chrome-mv3` folder.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked**.
5. Select the `chrome-mv3` folder.

The extension will remain installed until you remove it manually.

### Microsoft Edge

Microsoft Edge also supports unpacked extensions in Developer Mode.

1. Download the latest release and extract the `chrome-mv3` folder.
2. Open Microsoft Edge and go to `edge://extensions`.
3. Enable **Developer mode** in the left sidebar.
4. Click **Load unpacked**.
5. Select the `chrome-mv3` folder.

The extension will remain installed until you remove it manually.
