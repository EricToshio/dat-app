class WebSocketService {
    constructor() {
        this.wsocket = null;
        this.counter = 0;
    }
    addSocket(ws) {
        if(!this.wsocket)
            this.wsocket = ws;
    }
    sendMessage(message) {
        if(this.counter % 3 == 0) {
            if(this.wsocket)
                this.wsocket.send(JSON.stringify(message));
            else
                console.log("Socket unavailable");
        } else {
            this.counter += 1;
        }
    }
}

module.exports = new WebSocketService();