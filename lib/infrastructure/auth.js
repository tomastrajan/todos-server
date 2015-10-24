var jwt = require('express-jwt');
var config = require('../../config');

var jwtCheck = jwt({
    secret: new Buffer(config.AUTH_0_SECRET, 'base64'),
    audience:  config.AUTH_0_AUDIENCE
});

exports.checkAuthorized = jwtCheck;
