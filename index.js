const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
var usuario = require('./controllers/usuario.controller')
var quadrinho = require('./controllers/quadrinhos.controller')
var colecao = require('./controllers/colecoes.controller')
var avaliacao = require('./controllers/avaliacoes.controller')
var emprestimo = require('./controllers/emprestimos.controller')
var quadrinho_colecao = require('./controllers/quadrinho_colecoes.controller')

//Handlebars configs
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser configs
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/usuario', usuario)
app.use('/quadrinho', quadrinho) 
app.use('/colecao', colecao) 
app.use('/avaliacao', avaliacao) 
app.use('/emprestimo', emprestimo) 
app.use('/quadrinhocolecao', quadrinho_colecao) 

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
})