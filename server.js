const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log('Message received from client:', message);

        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                console.log('Broadcasting message to another client:', message);
                client.send(message);
            }
        });
    });
});

server.listen(3000, () => {
    console.log('WebSocket server is listening on port 3000');
});
