const express = require('express');
const path = require('path');

const router = express.Router();

const ganadores = [];

//Devuelve un archivo HTML
router.get('/info', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/duelo', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'duelo', 'duelo.html'));
});

router.post('/duelo', (request, response, next) => {
    console.log(request.body);
    //response.send("<h1>El ganador de Duelo de los destinos es: </h1>");
    let ganador = '';
    if(Math.floor(Math.random() * 2) == 0){
        ganador = request.body.visitante;
    }
    else {
        ganador = request.body.local;
    }
    console.log(ganador);
    ganadores.push(ganador);
    response.render(path.join('duelo', 'ganador.ejs'), {ganador: ganador, ganadores: ganadores});

});

module.exports = router;