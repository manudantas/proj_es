var express = require('express')
var router = express.Router()
var Usuario = require("../models/Usuario")

//rotas

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/login', function(req, res){
    res.render('login')
})

router.post('/validar', function(req, res){
    Usuario.findOne({  
        where: {login: req.body.login, senha: req.body.senha}
      })
      .then(user => {
        res.send("Bem vindo" +user.nome)
      }).catch(function(){
        res.send("Usuario não encontrado")
      });
})

router.get('/cadastro', function(req, res){
    res.render('form_usuario')
})

router.post('/add', function(req, res){
    Usuario.create({
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
        email: req.body.email,
        adm: req.body.adm
    }).then(function(){
        res.send("Usuário criado com sucesso !")
    }).catch(function(erro){
        res.send("Houve um erro" +erro)
    })
})

module.exports = router;