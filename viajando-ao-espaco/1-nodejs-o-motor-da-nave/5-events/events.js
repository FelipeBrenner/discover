const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
  console.log(message)
})

ev.emit('saySomething', "Mensagem by Felipe Brenner")

ev.once('saySomethingOnce', (message) => {
  console.log(message)
})

ev.emit('saySomethingOnce', "Mensagem by Felipe")
ev.emit('saySomethingOnce', "Mensagem by Brenner")