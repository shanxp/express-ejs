
const path = require('path');

const modelsPath = path.join(config.app_root, '/models');
const models = require(modelsPath);
const { User } = models;

const homeController = {
  index: async (req, res) => {
    const users = await User.list(10); // limit, offset
    res.render('layout', { page: null, params: { title: 'Welcome', users } });
  },
};

module.exports = homeController;
