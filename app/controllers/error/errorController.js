
const errorController = {
  index: (req, res, next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
  },
};

module.exports = errorController;
