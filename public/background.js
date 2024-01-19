// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.redirectUrl) {
      chrome.webRequest.onBeforeRequest.addListener(
        (details) => ({ redirectUrl: message.redirectUrl }),
        { urls: ['<all_urls>'], types: ['main_frame', 'sub_frame'] },
        ['blocking']
      );
    }
  });
  