'use strict'

const healthCheckController = {
    hc:(req, res)=>{
        return res.render('layout', { page: 'pages/hc/index', params : { title : 'Welcome'} });
    }
}

module.exports = healthCheckController