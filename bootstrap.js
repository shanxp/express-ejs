
const fs = require('fs');
const path = require('path');

const config = {
  path: {
    project: __dirname,
    app: path.join(__dirname, '/app'),
    env: path.join(__dirname, '/app/env'),
  }  
};

try {
  const currEnv = JSON.parse(fs.readFileSync(`${config.path.env}/${process.env.NODE_ENV}.json`));
  Object.keys(currEnv).forEach((key) => {
    config[key] = currEnv[key];
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e);
  process.exit(1);
}

global.config = config;
