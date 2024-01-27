const express = require('express');
const router = express.Router();
const clickController = require('../controllers/clickControllers');

router.post('/', clickController.registerClick);

module.exports = router;