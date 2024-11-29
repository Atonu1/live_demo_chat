// script.js

// Select elements
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

// Function to send a message
function sendMessage() {
    const text = messageInput.value.trim(); // Get the input value
    if (text !== "") {
        // Create a new message div
        const newMessage = document.createElement("div");
        newMessage.textContent = `You: ${text}`;
        newMessage.style.margin = "5px 0";
        
        // Append the message to the chatbox
        messages.appendChild(newMessage);

        // Clear the input field
        messageInput.value = "";
        messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
    }
}

// Add event listener for button click
sendButton.addEventListener("click", function() {
    sendMessage();
});

// Add event listener for pressing Enter to send message
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
