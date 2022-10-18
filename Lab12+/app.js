const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf();

const ig = require('instagram-scraping');

//uso de templates ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: 'lknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection);
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const rutas_usuario = require('./routes/user.routes');
const rutas_duelo = require('./routes/duelo.routes');
const rutas_saludo = require('./routes/saludo.routes');
const rutas_rival = require('./routes/rival.routes');
const { request } = require('http');
const { response } = require('express');

app.use('/user', rutas_usuario);
app.use('/batalla', rutas_duelo);
app.use('/saludo', rutas_saludo);
app.use('/rivales', rutas_rival);

app.get('/', (req, res) => {
    res.render('index', {data: ''})
})

app.post('/getprofile', (request, response, next) => {

    console.log(request.body.username);

    // using username for scraping
    ig.scrapeUserPage("alanrazop").
        then((result) => {
            response.render('index', {data: result});
        });
})

// Siempre es importante el orden de los middlewares
//use -> define Middleware
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