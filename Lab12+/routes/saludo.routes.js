const express = require('express');
const router = express.Router();


router.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta hola!');
});

router.use('/adios', (request, response, next) => {
    response.send('Nos vemos desde la ruta adios!');
});

module.exports = router;