
const user = (req, res, next) => {
  if (req.session && req.session.context && req.session.context.user) {
    res.locals.user = req.session.context.user;
  } else {
    res.locals.user = {};
  }
  next();
};

module.exports = user;
