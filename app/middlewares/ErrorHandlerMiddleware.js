const err = {
  handle: (error, req, res, next) => {
    if (error) {
      // display error
      console.error(error);
      const statusCode = error.status || 500;
      res.status(statusCode);
      res.render('layout', { page: 'errors/default', params: { title: 'Error occured', message: `error occured! ${req.requestId}` } });
    } else {
      next();
    }
  },
};

module.exports = err;
