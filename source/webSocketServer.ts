
import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const port = 8585;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let client = [];
wss.on('connection', (ws: WebSocket) => {

    client.push(ws);
    console.log("New connection: " + client.length)

    ws.on('message', (msg: string) => {

        console.log("Data logger", msg);

    });
});
function sendAll(message) {
    for (var i = 0; i < client.length; i++) {
        client[i].send("Message: " + message);
    }
}

server.listen(port, () => {
    console.log(`Server port: ${port} is starting... `);
});