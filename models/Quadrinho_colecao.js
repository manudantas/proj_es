const db = require('./db')
const Colecao = require("./Colecao")
const Quadrinho = require("./Quadrinho")

const Quadrinho_Colecao = db.sequelize.define('quadrinho_colecoes', {

})

Quadrinho.hasMany(Quadrinho_Colecao);
Quadrinho_Colecao.belongsTo(Quadrinho);

Colecao.hasMany(Quadrinho_Colecao);
Quadrinho_Colecao.belongsTo(Colecao);

module.exports = Quadrinho_Colecao

