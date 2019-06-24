const db = require('./db')
const Usuario = require("./Usuario")

const Colecao = db.sequelize.define('colecoes', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    nome: {
        type: db.Sequelize.STRING
    }
})

Usuario.hasMany(Colecao);
Colecao.belongsTo(Usuario);

module.exports = Colecao