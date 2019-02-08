
const healthCheckController = {
  hc: (req, res) => res.render('layout', { page: 'pages/hc/index', params: { title: 'Welcome' } }),
};

module.exports = healthCheckController;
