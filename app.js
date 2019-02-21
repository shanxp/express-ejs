
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const routePath = path.join(config.app_root, '/config/routes');
const routes = require(routePath);

const middlewarePath = path.join(config.app_root, '/middlewares');
const middlewares = require(middlewarePath);

app.set('views', path.join(config.app_root, '/views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded with deep objects
app.use(express.static('public'));
app.use('/', routes); // this should be last in middleware order
app.use(middlewares.error.handle);

module.exports = app;
