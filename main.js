const DatService = require('./services/dat-service') 
const stdin = process.openStdin();

console.log('Bem-vindo ao tic-tac-toe distribuido')
stdin.addListener("data", async function(input_raw) {
    const input = input_raw.toString().trim();
    switch (input){
        case 'play':
            let dat = new DatService();
            console.log( await dat.shareBoard());
            break;
        default:
            console.log('Comando não identificado');
    }
});