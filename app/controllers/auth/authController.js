/* eslint-disable eqeqeq */
const authController = {
  login: (req, res, next) => {
    try {
      if (req.session
        && req.session.context
        && req.session.context.user
        && req.session.context.user.authenticated) {
        res.redirect('/');
      } else if (req.method.toUpperCase() == 'POST') {
        const username = req.body.username || null;
        const password = req.body.password || null;
        if (username == 'shan' && password == '123') {
          const user = {
            authenticated: true,
            id: 1,
            username: 'shan',
            fullname: 'Shan Shanmugaesan',
          };
          req.session.context = {
            user,
          };
          res.redirect('/');
        }
      } else {
        res.render('layout', {
          page: 'pages/auth/login',
          params: { title: 'Login' },
        });
      }
    } catch (e) {
      next(e);
    }
  },
  logout: (req, res, next) => {
    try {
      if (req.session) {
        req.session.destroy(() => {
          res.redirect('/login');
        });
      } else {
        throw new Error('Logout could not be performed as no session found!');
      }
    } catch (e) {
      next(e);
    }
  },
};

module.exports = authController;
