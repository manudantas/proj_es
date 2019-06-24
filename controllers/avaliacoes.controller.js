var express = require('express')
var router = express.Router()
var Avaliacao = require("../models/Avaliacao")

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cadastro/:id', function(req, res){
    var id = req.params.id;
    res.render('form_avaliacao', {id})
})

router.post('/add/:id', function(req, res){
    Avaliacao.create({
        nota: req.body.nota,
        comentario: req.body.comentario,
        quadrinhoId: req.params.id
    }).then(function(){
        res.send("Avaliação criada com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

module.exports = router;