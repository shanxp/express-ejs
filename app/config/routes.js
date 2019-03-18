
const express = require('express');
const path = require('path');

const router = express.Router();
const controllers = require('../controllers');

const middlewarePath = path.join(config.path.app, '/middlewares');
const middlewares = require(middlewarePath);

router.get('/', middlewares.auth.isLoggedIn, controllers.home.index);
router.post('/', middlewares.auth.isLoggedIn, controllers.home.index);
router.get('/hc', controllers.hc.index);
router.get('/login', controllers.auth.login);
router.post('/login', controllers.auth.login);
router.get('/logout', controllers.auth.logout);
router.get('*', controllers.error.index); // catch-all route
router.post('*', controllers.error.index); // catch-all route

module.exports = router;
