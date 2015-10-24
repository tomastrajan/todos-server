var dev = {};
try {
    dev = require('./dev');
} catch (err) {
    console.log('DEV config not found using process environment variables')
}

exports.PG_CONNECTION_STRING = process.env.PG_CONNECTION_STRING || dev.PG_CONNECTION_STRING;
exports.AUTH_0_SECRET = process.env.AUTH_0_SECRET || dev.AUTH_0_SECRET;
exports.AUTH_0_AUDIENCE = process.env.AUTH_0_AUDIENCE || dev.AUTH_0_AUDIENCE;
