const express = require('express');
const router = express.Router();
const dueloController = require('../controllers/duelo.controller');


//Devuelve un archivo HTML
router.get('/info', dueloController.getInfo);

router.get('/duelo', dueloController.getDuelo);

router.post('/duelo', dueloController.postDuelo);

module.exports = router;