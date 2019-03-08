
const express = require('express');
const path = require('path');

const router = express.Router();
const controller = require('../controllers');

const middlewarePath = path.join(config.path.app, '/middlewares');
const middlewares = require(middlewarePath);

router.get('/', middlewares.auth.isLoggedIn, controller.homeController.index);
router.post('/', middlewares.auth.isLoggedIn, controller.homeController.index);
router.get('/hc', controller.healthCheckController.hc);
router.get('/login', controller.authController.login);
router.post('/login', controller.authController.login);
router.get('/logout', controller.authController.logout);
router.get('*', controller.errorController.index); // catch-all route
router.post('*', controller.errorController.index); // catch-all route

module.exports = router;
