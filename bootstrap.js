
const fs = require('fs');
const path = require('path');

const config = {
  project_root: __dirname,
  app_root: path.join(__dirname, '/app'),
};

try {
  const currEnv = JSON.parse(fs.readFileSync(`${__dirname}/app/env/${process.env.NODE_ENV}.json`));
  Object.keys(currEnv).forEach((key) => {
    // process.env[key] = currEnv[key];
    config[key] = currEnv[key];
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e);
  process.exit(1);
}

global.config = config;
