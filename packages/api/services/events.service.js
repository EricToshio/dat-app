const GameService = require('./game.service');

class EventService {
    static handleOponentMove() {
        console.log("Oponent made a change.");
        GameService.oponentMadeMove();
    }
    static handleWatchMove() {
        console.log("Someone made a change.");
        GameService.watchMadeMove();
    }
}

module.exports = EventService;