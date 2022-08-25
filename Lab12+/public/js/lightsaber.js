// html dinámico con eventos
const boton = document.getElementById("boton_imagen");

function muestra_foto_kyber () {
    document.getElementById("contenedor_cristal").innerHTML = '<img src="/media/LightsaberCrystal.webp" alt="Imagen de lightsaber" width="100" height="100">';
    boton.onclick=limpiar_foto;
}

function limpiar_foto() {
    document.getElementById("contenedor_cristal").innerHTML = '';
    boton.onclick = muestra_foto_kyber;
}

boton.onclick = muestra_foto_kyber;


const boton_cambio_color = document.getElementById("cambio_color");

let isRed = false;

//Default de la pagina
azul();

function rojo(){
    const contenedor = document.getElementById("contenedor_imagen2");
    contenedor.innerHTML = '<img src="/media/Red-lightsaber.webp" alt="rojo" width="400">';
    boton_cambio_color.innerText = "Azul";
    boton_cambio_color.style.backgroundColor = "blue";
    isRed = true;
}

function azul (){
    const contenedor = document.getElementById("contenedor_imagen2");
    contenedor.innerHTML = '<img src="/media/blue_lightsaber.jpeg" alt="azul" width="400">';
    boton_cambio_color.innerText = "Rojo";
    boton_cambio_color.style.backgroundColor = "red";
    isRed = false;
}

boton_cambio_color.onclick = () => {
    if(isRed){
        azul();
    }
    else {
        rojo();
    }  
}

const sentimiento = document.getElementById("sentimiento");

sentimiento.onkeyup = () => {
    document.getElementById("descripcion_sentimiento").innerText = sentimiento.value;
}