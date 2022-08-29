const path = require('path');
const Ganador = require('../models/ganador.model');

const ganadores = [];

exports.getInfo = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports.getDuelo = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'duelo', 'duelo.html'));
};

exports.postDuelo = (request, response, next) => {
    console.log(request.body);
    let nombreGanador = '';
    if(Math.floor(Math.random() * 2) == 0){
        nombreGanador = request.body.visitante;
    }
    else {
        nombreGanador = request.body.local;
    }

    const ganador = new Ganador(nombreGanador);
    ganador.save();
    
    response.render(path.join('duelo', 'ganador.ejs'), {
        ganador: ganador.nombre, 
        ganadores: Ganador.fetchAll()
    });
};