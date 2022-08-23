const filesystem = require('fs');
//Escribe archivo desde Javascript
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 120, 20000, 340, 1000, 50];

function promedio(arr) {
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        suma =+ arr[i];
    }
    return suma / arr.length;
}

console.log(promedio(arreglo));

function escribe(frase) {
    filesystem.writeFileSync('ejercicio.txt',frase);
}
let oracion = "Hola mi nombre es Alan Razo y este es un nuevo archivi de texto."
escribe(oracion);

// of: recorrer el ciclo for 
// in: imprime el indice del arreglo
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item); 
}

function esPalindromo(palabra) {
	var palabra = palabra.toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra = palabra.replace(/ /g, "");
 
	for (var i = 0; i < palabra.length; i++){
		if(palabra[i] != palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}

if(esPalindromo('Se van sus naves')) {
	console.log("Es palíndromo");
}
else {
	console.log("No es un palíndromo")
}

setTimeout(() => console.log("codigo asincrono"), 7000);

const http = require('http');

const server = http.createServer((request, response) => {
    //obtener url de la peticion
    console.log(request.url);
    //obtener ip de la peticion
    console.log(request.socket.remoteAddress);

    if(request.url === "/hola"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write("<h1>Hello world from node!</h1>");
        response.end();
    }
    else if (request.url === "/duelo" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write("<h1>¿Quién ganaría en duelo de sables de luz?</h1>");
        response.write('<form action="duelo" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Rivales:</legend>');
        response.write('<label for="visitante">Jedi </label><input type="text" name="visitante" id="visitante">');
        response.write('<br><br>');
        response.write('<label for="local">Sith </label><input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="¡Fight!">');
        response.write('</form>');
        response.end();
    }
    else if (request.url === "/duelo" && request.method === "POST"){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_visitante = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_visitante);
            const dato_local = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_local);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="utf-8"></head>');
            response.write("<h1>El ganador de Duelo de los destinos es: </h1>");
            if(Math.floor(Math.random() * 2) == 0){
                response.write('<h2>' + dato_visitante + '</h2>');
            } else {
                response.write('<h2>' + dato_local + '</h2>');
            }
            return response.end();
        });
    }
    else if(request.url === "/adios"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write("<h1>Nos vemos, hasta luego desde node :)</h1>");
        response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.end();
    } 
});

server.listen(3000);