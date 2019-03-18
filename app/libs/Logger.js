const logger = require('fluent-logger');

logger.configure(config.logger_base_prefix, {
  host: config.logger_host,
  port: config.logger_port,
  timeout: parseInt(config.logger_timeout, 10),
  reconnectInterval: parseInt(config.logger_reconnect_interval, 10), // (milliseconds)
});

module.exports = logger;
