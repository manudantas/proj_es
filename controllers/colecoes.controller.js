var express = require('express')
var router = express.Router()
var Colecao = require("../models/Colecao")

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro', function(req, res){
    res.render('form_colecao')
})

router.post('/add', function(req, res){
    Colecao.create({
        nome: req.body.nome,
    }).then(function(){
        res.send("Coleção criada com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

router.get('/editar/:id', function(req, res){
    Colecao.findOne(
        {where: {'id': req.params.id}
    })
    .then(colecao => {
        res.render('form_editar_colecao', {colecao: colecao})
    })
})

router.post('/editar/:id', function(req, res){
    Colecao.update({
        nome: req.body.nome,
    },{where: {'id': req.params.id}}).then(function(){
        res.send("Coleção editada com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro !" +erro)
    })
})

router.get('/listar', function(req, res){
    Colecao.findAll().then(function(colecoes){
        res.render('home_colecao', {colecoes: colecoes})
    })
})

router.get('/deletar/:id', function(req, res){
    Colecao.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Coleção deletada com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

module.exports = router;