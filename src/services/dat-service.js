var Dat = require('dat-node');

class DatService {
    shareBoard(){ 
            return new Promise(resolve => {
                var Dat = require('dat-node');
                Dat('./game', {temp: true}, function (err, dat) {
                    if (err) throw err
                    // Importa todos os dados do diretorio (watch => vigia mudanças)
                    dat.importFiles({watch: true});
                    // Compartilha 
                    dat.joinNetwork();

                    resolve(dat);
                })
            });
        }
    getBoard(keyEnemy){
        return new Promise(resolve => {
            Dat('./game2', { temp:true, key: keyEnemy, sparse: true}, function (err, dat) {
                if (err) throw err;
                dat.joinNetwork();
                resolve(dat);
            })
        })
    }
};



export default DatService;
