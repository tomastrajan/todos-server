var jwt = require('express-jwt');
var config = require('../../dev');

var jwtCheck = jwt({
    secret: new Buffer(process.env.AUTH_0_SECRET || config.AUTH_0_SECRET, 'base64'),
    audience: process.env.AUTH_0_AUDIENCE || config.AUTH_0_AUDIENCE
});

exports.checkAuthorized = jwtCheck;
