document.addEventListener("DOMContentLoaded", function () {
  let selectParagraphButton = document.getElementById("selectParagraph");
  let userAddressInput = document.getElementById("userAddressInput");

  selectParagraphButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "selectParagraph" });
      userAddressInput.style.display = "block";
    });
  });
});
