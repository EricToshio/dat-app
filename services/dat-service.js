var Dat = require('dat-node');

class DatService {
    shareBoard(){ 
            return new Promise(resolve => {
                Dat('/game', {temp: true}, function (err, dat) {
                    if (err) throw err
                    
                    // Importa todos os dados do diretorio (watch => atualizar ao vivo)
                    dat.importFiles({watch: true});
                    
                    // Compartilha 
                    dat.joinNetwork();
    
                    // Key para acessar dados
                    resolve('dat://' + dat.key.toString('hex'));
                })
            });
        }
    connectDat(){
        // TO-DO
    }
};

module.exports = DatService;
