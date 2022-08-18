const filesystem = require('fs');
//Escribe archivo desde Javascript
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Hola desde node");