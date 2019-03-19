/* eslint-disable no-console */
const logger = require(`${config.path.libs}/Logger`);

const l = {
  log: (type, data) => { // type is collection name e.g  audit, error, general
    const d = {
      payload: data,
      source: `${config.app.name}`,
      version: `${config.app.version}`,
      ip: `${config.app.ip}`,
    };
    logger.emit(`${config.logger_endpoint_prefix}.${type}`, d);
  },
};

module.exports = l;
