const express = require('express');
const router = express.Router();
const dueloController = require('../controllers/duelo.controller');
const isAuth = require('../util/is-auth');

//Devuelve un archivo HTML
router.get('/info', isAuth, dueloController.getInfo);

router.get('/duelo', isAuth, dueloController.getDuelo);

router.post('/duelo', isAuth, dueloController.postDuelo);

module.exports = router;