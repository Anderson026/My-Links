/* Criando o projeto para criar logs internos, */
const EventEmitter = require('events')
/* importando o file system */
const fs = require('fs')
/* importando o path */
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    /* utilizando o fs e path para localizar o local onde será colocado os dados do evento log */
   fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
       if (err) throw err
   })
})
/* funnção para emitir a mensagem do log */
function log(message) {
    emitter.emit('log', message)
}
/* exportando a função log */
module.exports = log