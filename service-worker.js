import { sendToBackend } from "./backendFunction.js";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "selectParagraph") {
    var selectedText = request.selectedText;
    sendToBackend(selectedText);
  }
});
