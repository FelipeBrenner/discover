// Utiliza-se a função require pra usar módulos
const path = require('path')

console.log(path.basename(__filename))

// Módulos criado próprios, e não os nativos como o path acima
const myModule = require('./exports')

console.log(myModule)