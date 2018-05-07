<<<<<<< HEAD
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
=======
const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 8080;
>>>>>>> 3f6f936f6603d814e38e49496789f7bfa4ddd8c5

app.use(session({
    secret: 'supersecret'
}));

app.use(bodyParser());

<<<<<<< HEAD
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
=======
setupPassport(app);

app.use('/', router);

app.listen(8080);
console.log('listening on port ', 8080);
>>>>>>> 3f6f936f6603d814e38e49496789f7bfa4ddd8c5
