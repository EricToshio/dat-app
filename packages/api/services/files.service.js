const fs = require('fs');
const DatService = require('./dat.service');

const BOARD_PATH = './game/board.json';
const OPONENT_BOARD_PATH = '/board.json';

class FileManipulator {
    static readOponentBoard() {
        if(!DatService.oponentDat){
            console.log("Dat file for oponent doesn't exist. FileManipulator is unable to read.")
            return;
        }
        return new Promise(resolve => {
            const oponentDat = DatService.oponentDat;
            oponentDat.archive.readFile(OPONENT_BOARD_PATH, function (err, content) {
                resolve(JSON.parse(content));
            });
        });
    }

    static writeBoard(newBoard) {
        const newBoardString = JSON.stringify(newBoard);
        fs.writeFile(BOARD_PATH, newBoardString, function(err) {
            if (err) throw err;
        });
    }

    static readBoard() {
        return new Promise(resolve => {
            fs.readFile(BOARD_PATH, 'utf8', function(err, fileContents) {
                if (err) throw err;
                resolve(JSON.parse(fileContents));
            });
        });
    }

    // static async getMergedBoards() {
    //     return new Promise(resolve => {
    //         const myBoard = await FileManipulator.readBoard();
    //         const oponentBoard = await FileManipulator.readOponentBoard();
    //         const mergedBoard = {"board":{}};
    //         ['1','2','3','4','5','6','7','8','9'].forEach(key => {
    //             if(myBoard["board"][key] === '' && oponentBoard["board"][key] === '')
    //                 mergedBoard["board"][key] = '';
    //             else if(myBoard["board"][key] !== '')
    //                 mergedBoard["board"][key] = myBoard["board"][key];
    //             else
    //                 mergedBoard["board"][key] = oponentBoard["board"][key];
    //         });
    //         resolve(mergedBoard);
    //     });
    // }
}

module.exports = FileManipulator;