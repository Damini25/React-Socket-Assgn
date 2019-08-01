var WebSocketServer = require('websocket').server;
var http = require('http');

//const wss = new WebSocketServer({ port: 8080 });
 
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
   response.writeHead(404);
   response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    //autoAcceptConnections: false
});
 
wsServer.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
  });
/*function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        function sendNumber() {
            if (client.readyState === client.OPEN) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                client.send(number.toString());
                setTimeout(sendNumber, 1000);
            }
        }
        sendNumber();
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
    connection.on('open',function() {
        console.log('WebSocket Client opened');
        connection.send({key:1,val:1});
        // function sendNumber() {
        //   //  if (client.readyState === client.OPEN) {
        //         var number = Math.round(Math.random() * 0xFFFFFF);
        //         connection.send(number.toString());
        //         setTimeout(sendNumber, 1000);
        //  //   }
        // }
        // sendNumber();
    });
});*/