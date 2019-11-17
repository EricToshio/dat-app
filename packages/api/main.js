const DatService = require('./services/dat.service'); 
const GameService = require('./services/game.service');
const EventService = require('./services/events.service');
const WebSocketService =require('./services/websocket.service');

const cors = require('cors');
const express = require('express');
const ws = require('ws');
const http = require('http');

//const PORT = Number(process.env.PORT) + 1 || 8080;
const PORT = 8080;
const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new ws.Server({ server });

wss.on('connection', (ws) => {
    console.log("Cliente connect to websocket");
    // ws.on('message', (message) => {
        // ws.send("hello world");
    // });
    // ws.send("Hi, Hello world");
    WebSocketService.addSocket(ws);
})

app.get('/', (req, res) => {
    res.send({
        message: 'Dat API is running'
    });
})

app.get('/create', (req, res) => {
    DatService.createBoard().then(dat => {
        const myKey = DatService.getLocalKey();
        GameService.clearBoard();
        res.send({"key": myKey.toString('hex')});
    });
});

app.get('/join', (req, res) => {
    const oponentDatKey = req.query.key;
    DatService.loadOponentBoard(`dat://${oponentDatKey}`).then(_ => {
        DatService.listenToOponentMoves(EventService.handleOponentMove);
        GameService.SetUpSeqNum(DatService.getLocalKey().toString('hex')<oponentDatKey);
        res.send({"status": "ok"});
    });
});

app.get('/make_move', async (req, res) => {
    const result = await GameService.makeMove(req.query.position, req.query.piece);
    res.send({"status": result});
});

app.get('/watch', (req, res) => {
    const datKey1 = req.query.key1;
    const datKey2 = req.query.key2;
    DatService.loadWatchBoard1(`dat://${datKey1}`).then(_ => {
        DatService.listenToWatchMoves1(EventService.handleWatchMove);
        DatService.loadWatchBoard2(`dat://${datKey2}`).then(_ => {
            DatService.listenToWatchMoves2(EventService.handleWatchMove);
            res.send({"status": "ok"});
        });
    });
    
});

// app.listen(PORT, () => console.log(`Dat API listening on port ${PORT}!`))
server.listen(PORT, () => console.log(`Dat API listening on port ${PORT}!`));
