//variables, constantes, consola (log, info, warn, error)

//Forma moderna de declarar variables
//El alcance es a nivel del bloque {}
let pulpo_mundial = "Paul";

//Forma clásica de declarar variables
//El alcance es a nivel de función
var pulpo_voice = "Timoty";

console.log(pulpo_mundial);

for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);

//La siguiente linea produce un error porque  i murió en el bloque anterior
for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);
console.info("Esto es información");
console.warn("Cuidado");
console.error("Error");
console.assert(1 === 1);
console.assert(true == 1);