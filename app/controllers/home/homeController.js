
const homeController = {
  index: (req, res) => res.render('layout', { page: null, params: { title: 'Welcome' } }),
};

module.exports = homeController;
