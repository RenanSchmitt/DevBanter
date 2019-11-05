var express = require('express');
const consign= require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes')
.then('config/dbConnection.js')
.into(app);

module.exports = app;