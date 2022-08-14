//variables, constantes, consola (log, info, warn, error)

//Forma moderna de declarar variables
//El alcance es a nivel del bloque {}
let pulpo_mundial = "Paul";

//Forma clásica de declarar variables
//El alcance es a nivel de función
var pulpo_voice = "Timoty";

const precio_comida_pulpos = 99.99;

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
//Verifica tipo de dato y valor
console.assert(1 === 1);
//verifica valor
console.assert(true == 1);

console.log("Precio: " + precio_comida_pulpos);

//alert, prompt, confirm
alert("Esto es una alerta");

const nombre = prompt("¿Como te llamas?");
console.log("Hola " + nombre + "!");

const is_hungry = confirm("¿Tienes hambre?");

// funciones tradicionales
function comer(){
    const comida = "Picadillo";
    console.log(comida);
    return true;
}
const comida = comer;

if (is_hungry){
    alert("Ya mero es la hora de la comida");
    comida();
}
else {
    alert("Tienes que comer bien auque no tengas hambre");
}

//funciones modernas
const anon = () => console.log("Anonimo");

anon();

const platillo_fuerte = (platillo) => {
    console.log("El " + platillo + " esta delicioso"); 
}

platillo_fuerte("tamal oaxaqueño");

//arreglos
const menu =["Papa al horno", "Nopales", "Pollo"];
console.log(menu);

//in itera sobre los indices del arreglo
for (let p in menu){
    console.log(menu[p]);
}

// of obtiene cada uno de los elementos del arreglo
for (let p of menu){
    console.log(p);
}

menu[10] = "Pasta";
console.log(menu);

menu.length = 2;
console.log(menu);

menu.push("Pizza");
console.log(menu);

//arreglos asociativos
menu["postre"] = "Ate con queso";
console.log(menu);

// html dinámico con eventos
const boton = document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML = '<img src="media/blue_lightsaber.jpeg" alt="Imagen de lightsaber">';
}