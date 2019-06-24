const db = require('./db')
const Quadrinho = require("./Quadrinho")

const Emprestimo = db.sequelize.define('emprestimos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    data: {
        type: db.Sequelize.STRING
    },
    amigo: {
        type: db.Sequelize.STRING
    },
})

Quadrinho.hasOne(Emprestimo);
Emprestimo.belongsTo(Quadrinho);

module.exports = Emprestimo