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

// const server = http.createServer((request, response) => {
//     //obtener url de la peticion
//     console.log(request.url);
//     //obtener ip de la peticion
//     console.log(request.socket.remoteAddress);

//     response.setHeader('Content-Type', 'text/html');
//     response.write(nuevaPagina);
//     response.end();
    
    
// });

filesystem.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});

//server.listen(3000);