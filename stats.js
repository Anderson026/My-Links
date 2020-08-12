/* aplicativo que mostra o status do nosso computador */
/* importando o os */
const os = require('os')
/* desestruturando o freemem e totalmem */

/* importando a função log do projeto loger.js */
const log = require('./logger')

/* Usando o SetInterval */
setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)

    const mem = parseInt(freemem() / 1024 /1024)

    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    console.clear()
    console.log("===== PC STATS =====")
    console.table(stats)
    /* transformando o resultado do log em json */
    log(`${JSON.stringify(stats)}\n`)

}, 1000)




