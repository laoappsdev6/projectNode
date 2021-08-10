import * as net from 'net';
import Gt06 from 'gt06'

const serverPort = 8888;

var server = net.createServer((client) => {
    var gt06 = new Gt06();
    console.log('client connected');

    client.on('data', (data) => {
        try {
            gt06.parse(data);
        }
        catch (e) {
            console.log('err', e);
            return;
        }

        if (gt06.expectsResponse) {
            client.write(gt06.responseMsg);
        }

        gt06.msgBuffer.forEach(msg => {
            console.log(msg);
        });

        gt06.clearMsgBuffer();
    });
});

server.listen(serverPort, () => {
    console.log('started server on port:', serverPort);
});