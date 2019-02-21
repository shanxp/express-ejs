
const path = require('path');

const errorController = {
  index: (req, res, next) => {
    let error = new Error('page not found');
    error.status = 404;
    next(error);
  },
};

module.exports = errorController;
