var _ = require('lodash');
var Sequelize = require('sequelize');
var db = require('../infrastructure/db');

var Todo = db.define('todo', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    userId: {
        type: Sequelize.STRING
    }
});

module.exports = Todo;
