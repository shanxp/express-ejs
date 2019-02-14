
const express = require('express');

const app = express();
const path = require('path');

const routes = require('./app/config/routes');

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use('/', routes);

module.exports = app;
