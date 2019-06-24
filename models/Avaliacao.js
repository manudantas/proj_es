const db = require('./db')
const Quadrinho = require("./Quadrinho")

const Avaliacao = db.sequelize.define('avaliacoes', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    nota: {
        type: db.Sequelize.INTEGER
    },
    comentario: {
        type: db.Sequelize.STRING
    },
})

Quadrinho.hasOne(Avaliacao);
Avaliacao.belongsTo(Quadrinho);

module.exports = Avaliacao