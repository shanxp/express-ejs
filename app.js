/* eslint-disable arrow-body-style */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');

const app = express();
const path = require('path');

const routePath = path.join(config.path.app, '/config/routes');
const routes = require(routePath);

const middlewarePath = path.join(config.path.app, '/middlewares');
const middlewares = require(middlewarePath);

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en', 'de'],
  // sets a custom cookie name to parse locale settings from
  cookie: 'lang',
  directory: `${config.path.app}/locales`,
});

app.set('views', path.join(config.path.app, '/views'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');

app.use(cookieParser());
app.use(middlewares.session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded with deep objects
app.use(i18n.init);
app.use(express.static('public')); // css,js
app.use(middlewares.requestId.add); // add unique request id to every request
app.use(middlewares.currentUser); // current user if logged in
app.use('/', routes); // this should be last in middleware order
app.use(middlewares.error.handle); // this should be last in app.use

module.exports = app;
