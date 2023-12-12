const socket = new WebSocket('ws://localhost:3000');

console.log('WebSocket connection status:', socket.readyState);

socket.addEventListener('message', (event) => {
    console.log('Message received from server:', event.data);

    const chatOutput = document.getElementById('chat-output');
    const message = event.data;

    chatOutput.innerHTML += `<p>${message}</p>`;
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the bottom
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        console.log('Sending message to server:', message);
        socket.send(message);
        messageInput.value = '';
    }
}
