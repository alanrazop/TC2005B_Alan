const filesystem = require('fs');
//Escribe archivo desde Javascript
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 120, 20000, 340, 1000, 50];

// of: recorrer el ciclo for 
// in: imprime el indice del arreglo
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item); 
}

setTimeout(() => console.log("codigo asincrono"), 7000);

const http = require('http');

const server = http.createServer((request, response) => {
    //obtener url de la peticion
    console.log(request.url);
    //obtener ip de la peticion
    console.log(request.socket.remoteAddress);

    response.setHeader('Content-Type', 'text/html');
    response.write("Hola mundo desde node!")
    response.end();
});

server.listen(3000);