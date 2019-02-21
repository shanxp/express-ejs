const error = {
  handle: (error, req, res, next) => {
    if(error){
      // display error
      let statusCode = error.status || 500;
      res.status(statusCode);
      res.render('layout', { page: 'errors/default', params: { title: 'Error occured', message: 'error occured!' } });
    }
    next(); 
  }
};

module.exports = error;
