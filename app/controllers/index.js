
const hc = require('./HealthCheckController');
const home = require('./HomeController');
const error = require('./ErrorController');
const auth = require('./AuthController');

module.exports = {
  hc,
  home,
  error,
  auth,
};
