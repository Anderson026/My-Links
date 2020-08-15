/* criando um servidor */
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')

/* função para deletar uma url */
function writeFile(cb) {
    fs.writeFile(path.join(__dirname, "urls.json"),
         JSON.stringify(data, null, 2),
        err => {
            if (err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
    )
}

/* criando a função de requisição e respostas das páginas html */
http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
/* ALL resources */
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }

    if (del){
        data.urls = data.urls.filter(item => String(item.url) !== String(url))
        return writeFile((message) => {
            res.end(message)
        })
    }


    data.urls.push({name, url})
    return writeFile((message) => res.end(message))
    
    /* definindo a porta de comunicação do servidor */
}).listen(3000, () => console.log('Api is running'))

/* Parei aos 01:08:00 do vídeo de node da Rocketseat */