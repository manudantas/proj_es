const db = require('./db')

const Usuario = db.sequelize.define('usuarios', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    nome: {
        type: db.Sequelize.STRING
    },
    login: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    adm: {
        type: db.Sequelize.BOOLEAN
    },
})

module.exports = Usuario