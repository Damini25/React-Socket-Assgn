const WebSocket = require('ws');
const stockData=require('./mockData.json');

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', function connection(ws) {
    console.log('connected')
    function sendData() {
        ws.send(JSON.stringify({
            "eventDate": "12:56:50 AM",
            "price": "27.15",
            "volume": "5",
            "side": "Ask"
        }));
    }
    
    /*function sendData2(res) {
        ws.send(JSON.stringify(res));
    }
    console.log(stockData);
    stockData['ticker'].map((res)=>{
        setTimeout(sendData(res),2000);
    })*/
    
     const stockInterval= setInterval(sendData, 2000);


    ws.on('open', function () {
        console.log('opened');
    })

    ws.on('close', function () {
        console.log('disconnected ')
          clearInterval(stockInterval);
    })

    ws.on('message', function incoming () {
        setTimeout(sendData, 2000);
    })
});

