import * as Net from 'net';

const port = 8888;
const sockets: Net.Socket[] = [];

const server = Net.createServer((s) => {
    console.log('socket length', sockets.length);


    console.log('new connection ', s.remoteAddress, s.remotePort);

    s.on('close', (e) => {

    });
    s.on('end', () => {

    })
    s.on('error', (e) => {

    })
    s.on('data', (k) => {
        console.log('coming data ', k.toString());

    });
    s.on('connect', (e) => {
        console.log('connecting', e);


    });
});

server.listen(port, '0.0.0.0', () => {
    console.log('Server is started port: ' + port);

});
