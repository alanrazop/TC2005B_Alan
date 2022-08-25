const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_duelo = require('./routes/duelo.routes');
const rutas_saludo = require('./routes/saludo.routes');

app.use('/battle', rutas_duelo);
app.use('/saludo', rutas_saludo);
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

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404).send('¡Error 404! El recurso solicitado no existe'); //Manda la respuesta
});

app.listen(3000);