// JS Code to handle message sending functionality

const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

// Function to send a message
function sendMessage() {
    const text = messageInput.value.trim();
    if (text !== "") {
        const newMessage = document.createElement("div");
        newMessage.textContent = `You: ${text}`; // Display the typed message
        newMessage.style.margin = "5px 0";
        messages.appendChild(newMessage); // Append the message
        messageInput.value = ""; // Clear the input field
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}

// Event listener for Send button
sendButton.addEventListener("click", function() {
    sendMessage();
});

// Event listener for pressing Enter key
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
