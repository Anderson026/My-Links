/* criando um servidor */
const http = require('http')
const fs = require('fs')
const path = require("path")

/* criando a função de requisição e respostas das páginas html */
http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url

    console.log(file)

    

    /* validação para a página principal */
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err

                res.end(content)
             }
        )
    /* definindo a porta de comunicação do servidor */
}).listen(5000, () => console.log('Server is running'))

/* Parei aos 58:30 do vídeo de node da Rocketseat */