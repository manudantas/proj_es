var express = require('express')
var router = express.Router()
var Quadrinho = require("../models/Quadrinho")

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro', function(req, res){
    res.render('form_quadrinho')
})

router.post('/add', function(req, res){
    Quadrinho.create({
        nome: req.body.nome,
        edicao: req.body.edicao,
        editora: req.body.editora,
        preco: req.body.preco
    }).then(function(){
        res.send("Quadrinho criado com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

router.get('/listar', function(req, res){
    Quadrinho.findAll().then(function(quadrinhos){
        res.render('home_quadrinho', {quadrinhos: quadrinhos})
    })
})

router.get('/editar/:id', function(req, res){
    Quadrinho.findOne(
        {where: {'id': req.params.id}
    })
    .then(quadrinho => {
        res.render('form_editar_quadrinho', {quadrinho: quadrinho})
    })
})

router.post('/editar/:id', function(req, res){
    Quadrinho.update({
        nome: req.body.nome,
        edicao: req.body.edicao,
        editora: req.body.editora,
        preco: req.body.preco
    },{where: {'id': req.params.id}}).then(function(){
        res.send("Quadrinho editado com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro !" +erro)
    })
})

router.get('/deletar/:id', function(req, res){
    Quadrinho.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Quadrinho deletado com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

router.get('/pesquisar', function(req, res){
    res.render('form_pesquisar_quadrinho')
})

router.post('/pesquisar', function(req, res){
    Quadrinho.findOne(
        {where: {'nome': req.body.nome}
    })
    .then(quadrinho => {
        if(quadrinho !== null){
            console.log(quadrinho);
            res.render('form_mostrar_quadrinho', {quadrinho: quadrinho})
        }else{
            res.send("Este quadrinho não existe")
        }
    })
})


module.exports = router;