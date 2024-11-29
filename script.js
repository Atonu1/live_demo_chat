document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const messages = document.getElementById("messages");

    const images = [
        "https://source.unsplash.com/50x50/?nature", 
        "https://source.unsplash.com/50x50/?city",
        "https://source.unsplash.com/50x50/?animal"
    ];

    // Function to send a message from the user
    function sendUserMessage() {
        const text = messageInput.value.trim();
        if (text !== "") {
            const userMessage = document.createElement("div");
            userMessage.textContent = `You: ${text}`;
            userMessage.classList.add("userMessage");
            messages.appendChild(userMessage);

            // Add a random image after user message
            const randomImage = document.createElement("img");
            randomImage.src = getRandomImage();
            randomImage.classList.add("randomImage");
            messages.appendChild(randomImage);

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
        botMessage.classList.add("botMessage");
        messages.appendChild(botMessage);

        // Add a random image after bot message
        const randomImage = document.createElement("img");
        randomImage.src = getRandomImage();
        randomImage.classList.add("randomImage");
        messages.appendChild(randomImage);

        messages.scrollTop = messages.scrollHeight;
    }

    // Function to get a random image from the list
    function getRandomImage() {
        return images[Math.floor(Math.random() * images.length)];
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
