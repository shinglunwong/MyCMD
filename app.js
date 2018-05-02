const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 8080;

app.use(session({
    secret: 'supersecret'
}));

app.use(bodyParser());

setupPassport(app);

app.use('/', router);

app.listen(8080);
console.log('listening on port ', 8080);