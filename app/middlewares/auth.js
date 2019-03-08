
const auth = {
  isLoggedIn: (req, res, next) => {
    console.log(req.session);
    if (req.session && req.session.context && req.session.context.user) {
      next();
    } else {
      res.redirect('/login');
    }
  },
};

module.exports = auth;
