const path = require('path');
const Rival = require('../models/rival.model')
const Ganador = require('../models/ganador.model');
const Swal = require('sweetalert2');

exports.getInfo = (request, response, next) => {
    response.render('index');
};

exports.getDuelo = (request, response, next) => {

    const cookie = request.cookies.numero_clicks ? request.cookies.numero_clicks : 0;
    const ultimo_ganador = request.session.ultimo_ganador ? request.session.ultimo_ganador : false;

    Rival.fetchAll()
        .then(([rows, fieldData]) => {
            console.log("Rivales: ");
            console.log(rows);
            response.render(path.join('duelo', 'duelo.ejs'), {
                clicks: cookie,
                ultimo_ganador: ultimo_ganador,
                rivales: rows,
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};

exports.postDuelo = (request, response, next) => {
    let cookie = 0;

    const clicks = request.cookies.numero_clicks ? Number(request.cookies.numero_clicks) + 1 : 0;
    //response.setHeader('Set-Cookie', 'numero_clicks=' + clicks + "; HttpOnly=true'");
    response.cookie('numero_clicks', clicks, {httpOnly: true});
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
    
    request.session.ultimo_ganador = ganador;

    response.render(path.join('duelo', 'ganador.ejs'), {
        ganador: ganador.nombre, 
        ganadores: Ganador.fetchAll(),
        clicks: clicks,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};