class DatService {
    constructor() {
        this.localDat = null;
        this.oponentDat = null;
        this.watchDat1 = null;
        this.watchDat2 = null;
        this.someoneIsListeningOponent = false;
        this.someoneIsListeningWatch1 = false;
        this.someoneIsListeningWatch2 = false;
    }

    createBoard() {
        const obj = this;
        return new Promise(resolve => {
            var Dat = require('dat-node');
            Dat('./game', {temp: true}, function (err, dat) {
                if (err) throw err
                // Importa todos os dados do diretorio (watch => vigia mudanças)
                dat.importFiles({watch: true});
                // Compartilha 
                dat.joinNetwork();
                
                obj.localDat = dat;

                resolve(dat);
            })
        });
    }

    getLocalDat() {
        return this.localDat;
    }

    getLocalKey() {
        return this.localDat ? this.localDat.key : null;
    }

    loadOponentBoard(keyEnemy){
        const obj = this;
        return new Promise(resolve => {
            var Dat = require('dat-node');
            Dat('./game2', { temp:true, key: keyEnemy, sparse: true}, function (err, dat) {
                if (err) throw err;
                dat.joinNetwork();
                obj.oponentDat = dat;
                resolve(dat);
            })
        })
    }

    listenToOponentMoves(listener) {
        if(this.someoneIsListeningOponent) return;
        this.oponentDat.trackStats().on('update', listener);
        this.someoneIsListeningOponent = true;
    }

    loadWatchBoard1(keyEnemy){
        const obj = this;
        return new Promise(resolve => {
            var Dat = require('dat-node');
            Dat('./game3', { temp:true, key: keyEnemy, sparse: true}, function (err, dat) {
                if (err) throw err;
                dat.joinNetwork();
                obj.watchDat1 = dat;
                resolve(dat);
            })
        })
    }

    listenToWatchMoves1(listener) {
        if(this.someoneIsListeningWatch1) return;
        this.watchDat1.trackStats().on('update', listener);
        this.someoneIsListeningWatch1 = true;
    }

    loadWatchBoard2(keyEnemy){
        const obj = this;
        return new Promise(resolve => {
            var Dat = require('dat-node');
            Dat('./game4', { temp:true, key: keyEnemy, sparse: true}, function (err, dat) {
                if (err) throw err;
                dat.joinNetwork();
                obj.watchDat2 = dat;
                resolve(dat);
            })
        })
    }

    listenToWatchMoves2(listener) {
        if(this.someoneIsListeningWatch2) return;
        this.watchDat2.trackStats().on('update', listener);
        this.someoneIsListeningWatch2 = true;
    }
}

module.exports = new DatService();
