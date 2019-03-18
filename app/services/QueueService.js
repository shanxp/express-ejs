
const logger = require(`${config.path.libs}/Logger`);

const q = {
  // type is an attribute so the worker can perform tasks based on type e.g "email"
  add: (type, data) => {
    const d = {
      payload: data,
      source: `${config.app.name}`,
      version: `${config.app.version}`,
      ip: `${config.app.ip}`,
    };
    logger.emit(`${config.queue_endpoint_prefix}.${type}`, d);
  },
};

module.exports = q;
