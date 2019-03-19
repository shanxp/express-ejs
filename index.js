
/* eslint-disable no-console */
const path = require('path');

require('./bootstrap');
const app = require('./app');

const servicesPath = path.join(config.path.app, '/services');
const services = require(servicesPath);
const { logger } = services;

const port = config.port || 5000;

app.listen(port, () => {
  const msg = `App is running on port ${port}`;
  console.log(msg);
  logger.log('boot', msg);
});
