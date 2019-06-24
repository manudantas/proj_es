const db = require('./db')
const Usuario = require("./Usuario")

const Quadrinho = db.sequelize.define('quadrinhos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    nome: {
        type: db.Sequelize.STRING
    },
    edicao: {
        type: db.Sequelize.STRING
    },
    editora: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    },
})

Usuario.hasMany(Quadrinho);
Quadrinho.belongsTo(Usuario);

module.exports = Quadrinho