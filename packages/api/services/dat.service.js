class DatService {
    constructor() {
        this.localDat = null;
        this.oponentDat = null;
        this.someoneIsListeningOponent = false;
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
}

module.exports = new DatService();
