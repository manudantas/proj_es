var express = require('express')
var router = express.Router()
var Emprestimo = require("../models/Emprestimo")

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro/:id', function(req, res){
    var id = req.params.id;
    res.render('form_emprestimo', {id})
})

router.post('/add/:id', function(req, res){
    Emprestimo.create({
        data: req.body.data,
        amigo: req.body.amigo,
        quadrinhoId: req.params.id
    }).then(function(){
        res.send("Quadrinho emprestado com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

module.exports = router;