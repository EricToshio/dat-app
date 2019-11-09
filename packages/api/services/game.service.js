const FileManipulator = require('./files.service');
const WebSocketService =require('./websocket.service');

class GameService {
    static async makeMove(position, piece) {
        const myBoard = await FileManipulator.readBoard();
        myBoard["board"][position] = piece;
        await FileManipulator.writeBoard(myBoard);
    }

    static async oponentMadeMove() {
        const oponentBoard = await FileManipulator.readOponentBoard();
        console.log("oponente fez jogada");
        console.log(oponentBoard);
        WebSocketService.sendMessage(oponentBoard);
    }
};

module.exports = GameService;