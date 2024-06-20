const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    sendAuthMessage(ws);

    const interval = setInterval(() => {
        sendAuthMessage(ws);
    }, 10000);

    ws.on('close', function close() {
        clearInterval(interval);
    });
});

function sendGayMessage(ws) {
    const message = JSON.stringify({ gay: true });
    ws.send(message);
}
