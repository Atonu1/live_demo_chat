document.getElementById('sendButton').addEventListener('click', function() {
    let userMessage = document.getElementById('messageInput').value;
    
    if (userMessage.trim() !== "") {
        // Display user message
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('userMessage');
        messageDiv.textContent = userMessage;
        document.getElementById('messages').appendChild(messageDiv);
        
        // Clear input field
        document.getElementById('messageInput').value = "";

        // Simulate bot response
        setTimeout(function() {
            let botMessage = "You said: " + userMessage;
            let botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('botMessage');
            botMessageDiv.textContent = botMessage;
            document.getElementById('messages').appendChild(botMessageDiv);
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        }, 1000);
    }
});
