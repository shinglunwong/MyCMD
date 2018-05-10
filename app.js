var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var passport = require('./passport-init');
var app = express();
const bodyPaser = require('body-parser');
const router = require('./router')(express);
require('dotenv').config();

const knex = require('knex')({
    // Config containing the information of the database connection.
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user:     process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});


var app = express();

app.use(bodyPaser.urlencoded({ extended: false }))//必要
app.use(express.static('public'));//必要：a website with many static files that you want to serve, like CSS files, HTML files or image files

passport(app, knex);
app.use('/',router);
app.listen(8080);

module.exports = app;
