var uuid = require('uuid');
var Todo = require('./todo.model');

exports.findAllByUserId = findAllByUserId;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.sync = sync;

function findAllByUserId(userId) {
    return Todo.findAll({
        where: {
            userId: userId
        },
        order: ['createdAt', 'DESC']
    });
}

function create(id, description, done, userId) {
    console.log(id);
    return Todo.create({
        id: id || uuid.v4(),
        description: description,
        done: done,
        userId: userId
    });
}

function update(id, description, done, userId) {
    return Todo.update({
        description: description,
        done: done
    }, {
        where: {
            id : id,
            userId : userId
        }
    });
}

function remove(id, userId) {
    return Todo.destroy({
        where: {
            id: id,
            userId: userId
        }
    });
}

function sync() {
    return Todo.sync({force: true});
}
