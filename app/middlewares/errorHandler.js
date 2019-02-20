const error = {
  handle: (error, req, res, next) => {
    if(error){
      // Log error
    }
    next(); 
  }
};

module.exports = error;
