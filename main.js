const DatService = require('./services/dat-service') 
const stdin = process.openStdin();
var localKey = null;

console.log('Bem-vindo ao tic-tac-toe distribuido')
stdin.addListener("data", async function(input_raw) {
    const input = input_raw.toString().trim();
    switch (input){
        case 'play':
            let dat = new DatService();
            if (localKey == null){
                localKey = await dat.shareBoard();
            }
            console.log(localKey);
            break;
        default:
            console.log('Comando não identificado');
    }
});