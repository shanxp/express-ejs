
const fs = require('fs');
const path = require('path');
const ip = require('ip');
const pkg = require('./package.json');

const config = {
  app: {
    name: pkg.name,
    version: pkg.version,
    ip: ip.address(),
  },
  path: {
    project: __dirname,
    app: path.join(__dirname, '/app'),
    env: path.join(__dirname, '/app/env'),
    libs: path.join(__dirname, '/app/libs'),
  },
};

try {
  const currEnv = JSON.parse(fs.readFileSync(`${config.path.env}/${process.env.NODE_ENV}.json`));
  Object.keys(currEnv).forEach((key) => {
    config[key] = currEnv[key];
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(__filename, e);
  process.exit(1);
}

global.config = config;
