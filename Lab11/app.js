const express = require('express');
const app = express();


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
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);