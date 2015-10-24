var Sequelize = require('sequelize');
var config = require('../../dev');

module.exports = new Sequelize(config.PG_CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});
