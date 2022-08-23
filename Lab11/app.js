const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const rutas_duelo = require('./routes/duelo.routes');

app.use('/battle', rutas_duelo);

// Siempre es importante el orden de los middlewares
//use define Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Segundo middleware');
    next();
});


app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta hola!');
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404).send('¡Error 404! El recurso solicitado no existe'); //Manda la respuesta
});

app.listen(3000);