const DatService = require('./services/dat.service'); 
const GameService = require('./services/game.service');
const EventService = require('./services/events.service');
const WebSocketService =require('./services/websocket.service');
const encodeUtils = require ('./utils/encode.utils');

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

app.get('/join', async (req, res) => {
    const oponentDatKey = req.query.key;

    await DatService.loadOponentBoard(`dat://${oponentDatKey}`);

    DatService.listenToOponentMoves(EventService.handleOponentMove);
    GameService.SetUpSeqNum(DatService.getLocalKey().toString('hex')<oponentDatKey);
    res.send({"status": "ok"});
});

app.get('/make_move', async (req, res) => {
    const result = await GameService.makeMove(req.query.position, req.query.piece);
    res.send({"status": result});
});

app.get('/watch', async (req, res) => {
    const shareKey = req.query.key;
    const { datKey1, datKey2 } = await encodeUtils.decodeKeys(shareKey);

    await Promise.all([
        DatService.loadWatchBoard1(`dat://${datKey1}`),
        DatService.loadWatchBoard2(`dat://${datKey2}`),
    ]);
    DatService.listenToWatchMoves1(EventService.handleWatchMove);
    DatService.listenToWatchMoves2(EventService.handleWatchMove);

    res.send({"status": "ok"});
});

app.get('/sharing', async (req,res) => {
    const opponentKey = DatService.getOpponentKey().toString('hex');
    const localKey = DatService.getLocalKey().toString('hex');
    const shareKey = await encodeUtils.encodeKeys(localKey, opponentKey);
    
    res.send({"shareKey": shareKey});
});

// app.listen(PORT, () => console.log(`Dat API listening on port ${PORT}!`))
server.listen(PORT, () => console.log(`Dat API listening on port ${PORT}!`));
