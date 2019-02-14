const pkg = require('./package.json');

module.exports = {
  apps: [{
    name: pkg.name, // reads app name from package.json
    script: 'index.js',
    watch: true,
    // exec_mode: 'cluster',
    // instances: 'max',
    merge_logs: true,
    env: {
      NODE_ENV: 'dev',
    },
    env_test: {
      NODE_ENV: 'test',
    },
    env_prod: {
      NODE_ENV: 'prod',
    },
  }],
};
