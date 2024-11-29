document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const messages = document.getElementById("messages");

    // Function to send a message from the user
    function sendUserMessage() {
        const text = messageInput.value.trim();
        if (text !== "") {
            const userMessage = document.createElement("div");
            userMessage.textContent = `You: ${text}`;
            userMessage.style.textAlign = "left"; // User message aligned to the left
            userMessage.style.backgroundColor = "#d1ffd1"; // Light green background
            messages.appendChild(userMessage);
            messageInput.value = "";
            messages.scrollTop = messages.scrollHeight;

            // Simulate bot's reply after 1 second
            setTimeout(sendBotMessage, 1000);
        }
    }

    // Function to send a bot message (reply from other user or bot)
    function sendBotMessage() {
        const botMessage = document.createElement("div");
        botMessage.textContent = "Bot: Thanks for your message!";
        botMessage.style.textAlign = "right"; // Bot message aligned to the right
        botMessage.style.backgroundColor = "#f0f0f0"; // Light gray background
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }

    // Send message when button is clicked
    sendButton.addEventListener("click", function() {
        sendUserMessage();
    });

    // Allow sending message by pressing Enter key
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendUserMessage();
        }
    });
});
