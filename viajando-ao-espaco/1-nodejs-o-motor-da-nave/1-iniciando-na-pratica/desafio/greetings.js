const getFlag = require('./flags')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}.`)