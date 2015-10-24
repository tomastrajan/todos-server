var bodyParser = require('body-parser')
var cors = require('cors')
var express = require('express');
var app = express();

var auth = require('./lib/infrastructure/auth');
var todoRoute = require('./lib/todo/todo.route');

var port = process.env.PORT || 8080;

app.use(cors());
app.use(auth.checkAuthorized);
app.use(bodyParser.json());

todoRoute(app);

app.listen(port, function () {
    console.log('Server started - port', port);
});
