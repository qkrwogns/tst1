

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('웹 소켓 연결됨');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // 클라이언트로부터 받은 메시지 처리
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
