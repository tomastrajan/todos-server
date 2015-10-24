var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var auth = require('./lib/infrastructure/auth');
var todoRoute = require('./lib/todo/todo.route');

var port = process.env.PORT || 8080;

app.use(auth.checkAuthorized);
app.use(bodyParser.json());

todoRoute(app);

app.listen(port, function () {
    console.log('Server started - port', port);
});
