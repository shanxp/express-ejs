/* eslint-disable no-console */
const logger = require('fluent-logger');

logger.configure(config.logger_base_prefix, {
  host: config.logger_host,
  port: config.logger_port,
  timeout: parseInt(config.logger_timeout, 10),
  reconnectInterval: parseInt(config.logger_reconnect_interval, 10), // (milliseconds)
});

logger.on('connect', () => {
  console.log('Logger service is active!');
});
logger.on('error', (error) => {
  console.error(__filename, error);
  process.exit(1);
});

module.exports = logger;
