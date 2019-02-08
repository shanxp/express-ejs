'use strict'

const homeController = {
    index: (req, res)=>{
        return res.render('layout', { page: null, params : { title : 'Welcome'} });
    }
}

module.exports = homeController