/* eslint-disable arrow-body-style */
const session = require('express-session');
const uuid = require('uuid/v4');

const s = session({
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
