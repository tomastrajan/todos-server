var TodoService = require('./todo.service');

var RESOURCE = '/todos';

module.exports = function(app) {
    app.get(RESOURCE, function (req, res) {
        var userId = req.headers['x-user-id'];
        TodoService.findAllByUserId(userId)
            .then(function(todos) {
                res.json(todos);
            })
    });

    app.post(RESOURCE, function (req, res) {
        var userId = req.headers['x-user-id'];
        var todo = req.body;
        TodoService.create(todo.id, todo.description, todo.done, userId)
            .then(function() {
                res.sendStatus(201);
            })
    });

    app.put(RESOURCE + '/:id', function (req, res) {
        var userId = req.headers['x-user-id'];
        var todo = req.body;
        TodoService.update(req.params.id, todo.description, todo.done, userId)
            .then(function() {
                res.sendStatus(200);
            })
    });

    app.delete(RESOURCE + '/reinit', function (req, res) {
        TodoService.sync()
            .then(function() {
                res.sendStatus(204);
            })
    });

    app.delete(RESOURCE + '/:id', function (req, res) {
        var userId = req.headers['x-user-id'];
        TodoService.remove(req.params.id, userId)
            .then(function() {
                res.sendStatus(204);
            })
    });
}
