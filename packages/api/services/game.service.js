const FileManipulator = require('./files.service');
const WebSocketService = require('./websocket.service');
const gameUtils = require('./../utils/game.utils');

class GameService {
    static async makeMove(position, piece) {
        return new Promise(async resolve => {
            const myBoard = await FileManipulator.readBoard();
            const opponentBoard = await FileManipulator.readOponentBoard();
            console.log("Seu seq",myBoard.seq,"adversario",opponentBoard.seq);
            if (myBoard.seq < opponentBoard.seq){
                console.log("voce fez um movimento");
                const mergedBoard = gameUtils.mergeBoards(myBoard, opponentBoard);
                mergedBoard["board"][position] = piece;
                mergedBoard["seq"] = myBoard.seq +2;
                FileManipulator.writeBoard(mergedBoard);
                resolve("ok");
            }else{
                console.log("nao eh a sua vez de jogar");
                resolve("not your turn");
            }
        });
    }

    static async oponentMadeMove() {
        const opponentBoard = await FileManipulator.readOponentBoard();
        const myBoard = await FileManipulator.readBoard();
        const mergeBoard = gameUtils.mergeBoards(myBoard, opponentBoard);
        console.log("oponente fez jogada");
        console.log(mergeBoard);
        WebSocketService.sendMessage(mergeBoard);
    }

    static async watchMadeMove() {
        const watchBoard1 = await FileManipulator.readWatchBoard1();
        const watchBoard2 = await FileManipulator.readWatchBoard2();
        const mergeBoard = gameUtils.mergeBoards(watchBoard1, watchBoard2);
        console.log("alguem fez jogada");
        console.log(mergeBoard);
        WebSocketService.sendMessage(mergeBoard);
    }

    static async clearBoard() {
        const myBoard = await FileManipulator.readBoard();
        ['1','2','3','4','5','6','7','8','9'].forEach(position => myBoard.board[position] = '');
        myBoard.seq = null;
        FileManipulator.writeBoard(myBoard);
    }

    static async SetUpSeqNum(has_preference){
        const myBoard = await FileManipulator.readBoard();
        if(has_preference){
            myBoard.seq = 1;
        }else{
            myBoard.seq = 2;
        }
        FileManipulator.writeBoard(myBoard);
    }
};

module.exports = GameService;