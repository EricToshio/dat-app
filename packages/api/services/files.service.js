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

    static readWatchBoard1() {
        if(!DatService.watchDat1){
            console.log("Dat file for oponent doesn't exist. FileManipulator is unable to read.")
            return;
        }
        return new Promise(resolve => {
            const watchDat1 = DatService.watchDat1;
            watchDat1.archive.readFile(OPONENT_BOARD_PATH, function (err, content) {
                resolve(JSON.parse(content));
            });
        });
    }

    static readWatchBoard2() {
        if(!DatService.watchDat2){
            console.log("Dat file for oponent doesn't exist. FileManipulator is unable to read.")
            return;
        }
        return new Promise(resolve => {
            const watchDat2 = DatService.watchDat2;
            watchDat2.archive.readFile(OPONENT_BOARD_PATH, function (err, content) {
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
}

module.exports = FileManipulator;