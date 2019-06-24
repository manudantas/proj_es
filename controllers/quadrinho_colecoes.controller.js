var express = require('express')
var router = express.Router()
var Quadrinho = require("../models/Quadrinho")
var Colecao = require("../models/Colecao")
var Quadrinho_colecao = require("../models/Quadrinho_colecao")
var sequelize = require('sequelize');

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro', function(req, res){
    Quadrinho.findAll().then(function(quadrinhos){
        console.log(quadrinhos)
        res.render('adicionar_quadrinho_colecao', {quadrinhos: quadrinhos})
    })

})


module.exports = router;