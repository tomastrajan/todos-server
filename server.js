var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var auth = require('./lib/infrastructure/auth');
var todoRoute = require('./lib/todo/todo.route');

app.use(auth.checkAuthorized);
app.use(bodyParser.json());

todoRoute(app);

app.listen(8080, function () {
    console.log('Server started - port', 8080);
});
