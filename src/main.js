const DatService = require('./services/dat-service') 
const stdin = process.openStdin();

// Variáveis globais
var estado = "inicio";
var localDat = null;
var enemyDat = null;
var gameKey = null;

console.log('Bem-vindo ao tic-tac-toe distribuido')
stdin.addListener("data", async function(input_raw) {
    const input = input_raw.toString().trim();
    switch (estado){
        case "inicio":
            initial_input(input);
            break;
        case "getEnemy":
            let dat = new DatService();
            enemyDat = await dat.getBoard(input);
            console.log("chave para assistir a partida",enemyDat.key.toString('hex')+','+localDat.key.toString('hex'))
            enemyDat.trackStats().on('update', ()=> enemyDat.archive.readFile('/board.json', function (err, content) {
                console.log(JSON.parse(content))
                //Funçao que recebe mudancas no dados do inimigo
            }));
            break;
        case "getGame":
            gameKey = input;
            break;
        default:
            console.log("estado não identificado")
    } 
});


initial_input = async (input) => {
    switch (input){
        case 'play':
            if (localDat == null){
                let dat = new DatService();
                localDat = await dat.shareBoard();
            }
            console.log("Sua chave de compartilhamento é dat://" + localDat.key.toString('hex'));
            console.log("coloque a chave de compartilhamento do outro jogador");
            estado = "getEnemy";
            break;
        case "watch":
            console.log("coloque a chave de compartilhamento da partida");
            estado = "getGame";
            break;
        default:
            console.log('Comando não identificado');
    }
}