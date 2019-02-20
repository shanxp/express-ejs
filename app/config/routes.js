
const express = require('express');

const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.homeController.index);
router.post('/', controller.homeController.index);
router.get('/hc', controller.healthCheckController.hc);

module.exports = router;
