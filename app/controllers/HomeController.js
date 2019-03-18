
const path = require('path');

const servicesPath = path.join(config.path.app, '/services');
const services = require(servicesPath);
const { logger, queue } = services;

const modelsPath = path.join(config.path.app, '/models');
const models = require(modelsPath);
const { User } = models;

const homeController = {
  index: async (req, res, next) => {
    try {
      const users = await User.list(10); // limit, offset
      logger.log('audit', { message: '10 users being retrieved' });
      queue.add('email', { email: 'hello@web.com', name: 'Shan' });
      res.render('layout', { page: null, params: { title: 'Welcome', users } });
    } catch (e) {
      next(e);
    }
  },
};

module.exports = homeController;
