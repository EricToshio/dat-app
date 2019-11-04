var Dat = require('dat-node')
var fs = require('fs');

// Seleciona o diretorio dos dados
Dat('/game', {temp: true}, function (err, dat) {
  if (err) throw err

  // Importa todos os dados do diretorio (watch => atualizar)
  dat.importFiles({watch: true})

  // Compartilha 
  dat.joinNetwork()

  // Key para acessar dados
  console.log('dat://' + dat.key.toString('hex'))
})