const express = require('express');
const router = express.Router();
const rivalController = require('../controllers/rival.controller');
const isAuth = require('../util/is-auth');

//Devuelve un archivo HTML
router.get('/new', isAuth, rivalController.getNewRival);

router.post('/new', isAuth, rivalController.postNewRival);

router.get('/edit/:id', isAuth, rivalController.getEditRival);

router.post('/edit/', isAuth, rivalController.postEditRival);

router.get('/buscar/:valor', rivalController.getBuscar)

router.get('/', isAuth, rivalController.getRival);

module.exports = router;