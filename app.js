
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');

const app = express();
const path = require('path');

const routePath = path.join(config.path.app, '/config/routes');
const routes = require(routePath);

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en', 'de'], 
  // sets a custom cookie name to parse locale settings from
  cookie: 'express-with-view', 
  directory: config.path.app + '/locales'
});
 
// cookieParser to expose cookies to req.cookies
app.use(cookieParser());

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);

const middlewarePath = path.join(config.path.app, '/middlewares');
const middlewares = require(middlewarePath);

app.set('views', path.join(config.path.app, '/views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded with deep objects
app.use(express.static('public'));  // css,js
app.use(middlewares.requestId.add); // add unique request id to every request
app.use('/', routes); // this should be last in middleware order
app.use(middlewares.error.handle); // this should be last in app.use

module.exports = app;
