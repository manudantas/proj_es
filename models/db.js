const Sequelize = require('sequelize')

    const sequelize = new Sequelize('quadrinhos_bd', 'root', 'root', {
        host: "localhost", 
        dialect: "mysql"
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}