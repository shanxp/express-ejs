
const healthCheckController = require('./hc/healthCheckController');
const homeController = require('./home/homeController');
const errorController = require('./error/errorController');
const authController = require('./auth/authController');

module.exports = {
  healthCheckController,
  homeController,
  errorController,
  authController,
};
