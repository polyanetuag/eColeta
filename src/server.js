const express = require("express")
const server = express()


//configurar pasta publica
server.use(express.static("public"))              //configuração do servidor


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação

// página inicial
// req: Requisição, pedido
// res: Resposta
server.get("/", (req, res) => {                                         //configuração de rota
    return res.render("index.html", { title: "Um título"})
})

server.get("/create-point", (req, res ) => {                                         //configuração de rota
    return res.render("create-point.html")
})

server.get("/search", (req, res ) => {                                         //configuração de rota
    return res.render("search-results.html")
})

//ligar o servidor 
server.listen(3000)

