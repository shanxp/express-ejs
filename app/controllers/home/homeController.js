
const path = require('path');

const modelsPath = path.join(config.path.app, '/models');
const models = require(modelsPath);
const { User } = models;

const homeController = {
  index: async (req, res, next) => {
    try {      
      const users = await User.list(10); // limit, offset
      res.render('layout', { page: null, params: { title: 'Welcome', users } });
    }
    catch(e){
      next(e);
    }
  },
};

module.exports = homeController;
