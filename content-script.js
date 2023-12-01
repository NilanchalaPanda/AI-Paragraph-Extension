import { sendToBackend, askUserForAddress } from "./backendFunction.js";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "selectParagraph") {
    var selectedText = window.getSelection().toString().trim();
    sendToBackend(selectedText);
    setTimeout(function () {
      askUserForAddress();
    }, 3000);
  }
});

document.addEventListener("contextmenu", function (event) {
  if (event.button === 2) {
    var selectedText = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({
      action: "selectParagraph",
      selectedText: selectedText,
    });
  }
});
