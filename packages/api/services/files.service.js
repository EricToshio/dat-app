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
        const oponentDat = DatService.oponentDat;
        oponentDat.archive.readFile(OPONENT_BOARD_PATH, function (err, content) {
            console.log(JSON.parse(content))
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
}

module.exports = FileManipulator;