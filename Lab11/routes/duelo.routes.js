const express = require('express');
const router = express.Router();

router.get('/duelo', (request, response, next) => {
    let html = 
    "<!DOCTYPE html>"+
    '<head><meta charset="utf-8"></head>'+
    "<h1>¿Quién ganaría en duelo de sables de luz?</h1>"+
    '<form action="duelo" method="POST">'+
    '<fieldset>'+
    '<legend>Rivales:</legend>'+
    '<label for="visitante">Jedi </label><input type="text" name="visitante" id="visitante">'+
    '<br><br>'+
    '<label for="local">Sith </label><input type="text" name="local" id="local">'+
    '</fieldset>'+
    '<input type="submit" value="¡Fight!">'+
    '</form>';
    response.send(html);
});

router.post('/duelo', (request, response, next) => {
    console.log(request.body);
    //response.send("<h1>El ganador de Duelo de los destinos es: </h1>");
    if(Math.floor(Math.random() * 2) == 0){
        response.send('<h2>El ganador de Duelo de los destinos es: ' + request.body.visitante + '</h2>');
    }
    else {
        response.send('<h2>El ganador de Duelo de los destinos es: ' + request.body.local + '</h2>');
    }

});

module.exports = router;