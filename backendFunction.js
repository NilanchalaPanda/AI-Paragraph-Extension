// Function to send text to the backend
export function sendToBackend(text) {
  console.log("Selected Text:", text);
  // Implement logic to send 'text' to your backend with AI processing
}

// Function to ask the user for the address
export function askUserForAddress() {
  let oppositeUserAddress = document.getElementById("userAddressInput").value;
  // You can use 'oppositeUserAddress' further in your logic
  console.log("Opposite User Address:", oppositeUserAddress);
}
