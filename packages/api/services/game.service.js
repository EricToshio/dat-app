const FileManipulator = require('./files.service');
const WebSocketService = require('./websocket.service');
const gameUtils = require('./../utils/game.utils');

class GameService {
    static async makeMove(position, piece) {
        console.log("voce fez um movimento");
        const myBoard = await FileManipulator.readBoard();
        const opponentBoard = await FileManipulator.readOponentBoard();
        const mergedBoard = gameUtils.mergeBoards(myBoard, opponentBoard);

        mergedBoard["board"][position] = piece;
        FileManipulator.writeBoard(mergedBoard);
    }

    static async oponentMadeMove() {
        const opponentBoard = await FileManipulator.readOponentBoard();
        const myBoard = await FileManipulator.readBoard();
        const mergeBoard = gameUtils.mergeBoards(myBoard, opponentBoard);
        console.log("oponente fez jogada");
        console.log(mergeBoard);
        WebSocketService.sendMessage(mergeBoard);
    }
};

module.exports = GameService;