var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('./passport-init');
var app = express();
// var logger = require('morgan');  ?????

// var indexRouter = require('./routes/index');   whats that???
// var usersRouter = require('./routes/users');   whats that???
const router = require("./router")(express)

const knex = require('knex')({
    // Config containing the information of the database connection.
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user:     process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});



// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport(app);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/',router);
app.listen(8080);

// module.exports = app;
