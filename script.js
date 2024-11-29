document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const messages = document.getElementById("messages");

    // Function to send a message
    function sendMessage() {
        const text = messageInput.value.trim();
        if (text !== "") {
            const newMessage = document.createElement("div");
            newMessage.textContent = `You: ${text}`;
            messages.appendChild(newMessage);
            messageInput.value = "";
            messages.scrollTop = messages.scrollHeight;

            // Show an alert when a message is sent
            alert("Message sent!");
        }
    }

    // Send message when button is clicked
    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    // Allow sending message by pressing Enter key
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
