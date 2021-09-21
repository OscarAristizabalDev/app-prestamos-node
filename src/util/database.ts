const {Sequelize} = require("sequelize");

const sequilize = new Sequelize("app_creditos", "root", "",{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequilize;


