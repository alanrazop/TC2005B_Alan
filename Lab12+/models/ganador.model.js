const ganadores = [];

module.exports = class Ganador {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        ganadores.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //Al ser un metodo estatico, se ejecuta sobre la clase, no sobre una instancia de la clase.
    static fetchAll() {
        return ganadores;
    }

}