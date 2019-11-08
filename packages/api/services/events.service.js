const GameService = require('./game.service');

class EventService {
    static handleOponentMove() {
        console.log("Oponent made a change.");
        GameService.oponentMadeMove();
    }
}

module.exports = EventService;