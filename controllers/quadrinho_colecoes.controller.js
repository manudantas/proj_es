var express = require('express')
var router = express.Router()
var Quadrinho = require("../models/Quadrinho")
var Colecao = require("../models/Colecao")
var Quadrinho_colecao = require("../models/Quadrinho_colecao")
var sequelize = require('sequelize')

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro', function(req, res){
    Quadrinho.findAll({
        where: sequelize.literal("(quadrinhos.id NOT IN (SELECT quadrinho_colecoes.quadrinhoId FROM quadrinho_colecoes WHERE quadrinho_colecoes.quadrinhoId=quadrinhos.id))")
    }).then(function(quadrinhos){
        res.render('adicionar_quadrinho_colecao', {quadrinhos: quadrinhos})
    })

})

router.get('/adicionar/:id', function(req, res){
    res.render('form_cadastrar_quadrinho_colecao', {id: req.params.id})
})

router.post('/adicionar/:id', function(req, res){
    Colecao.findOne(
        {where: {'nome': req.body.nome}
    })
    .then(colecao => {
        if(colecao !== null){
            Quadrinho_colecao.create({
                quadrinhoId: req.params.id,
                colecoId: colecao.id,
            }).then(function(){
                res.send("Quadrinho adicionado com sucesso !")
            }).catch(function(erro){
                res.send("Houve um erro" +erro)
            })
        }else{
            res.send("Esta coleção não existe")
        }
    })
})


module.exports = router;