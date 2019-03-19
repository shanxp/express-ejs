/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const uuid = require('uuid/v4');

const cnf = {
  host: config.session_store_host,
  port: config.session_store_port,
};

const redisClient = redis.createClient(cnf);

redisClient.on('connect', () => {
  console.log('Redis is connected!');
});

redisClient.on('error', (err) => {
  console.error(`Redis ${err}`);
  process.exit(1);
});

const options = {
  client: redisClient,
};

const s = session({
  store: new RedisStore(options),
  name: `${config.session_name}`,
  genid: () => {
    // req.sessionID
    return uuid(); // use UUIDs for session IDs
  },
  secret: `${config.session_secret}`,
  resave: false,
  saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store.
  rolling: true, // session expiry will be refreshed on every response
  cookie: {
    secure: (config.secure_cookie === 'true'),
    expires: parseInt(config.session_expiry, 10), // base decimal 10
    maxAge: parseInt(config.session_expiry, 10), // base decimal 10 - gives remaining time of expiry
    httpOnly: true,
  },
});

module.exports = s;
