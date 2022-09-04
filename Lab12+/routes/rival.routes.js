const express = require('express');
const router = express.Router();
const rivalController = require('../controllers/rival.controller');


//Devuelve un archivo HTML
router.get('/new', rivalController.getNewRival);

router.post('/new', rivalController.postNewRival);

router.get('/', rivalController.getRival);

module.exports = router;