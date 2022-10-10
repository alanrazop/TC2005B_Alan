const db = require('../util/database');

module.exports = class Rival {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO equipos (nombre) VALUES (?)', [this.nombre])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //Al ser un metodo estatico, se ejecuta sobre la clase, no sobre una instancia de la clase.
    static fetchAll() {
        return db.execute('SELECT * FROM equipos');
        
    }

    static saveEdit(rival){
        return db.execute('UPDATE equipos SET nombre = ? WHERE id = ?', [rival.nombre, rival.id]);
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM equipos WHERE id = ?', [id]);
    }

    static find(valor) {
        return db.execute('SELECT * FROM equipos WHERE nombre LIKE ?', ['%' + valor + '%']);
    }

}