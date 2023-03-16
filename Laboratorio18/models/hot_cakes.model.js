const db = require('../util/database');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_usuario) {
        this.nombre = mi_usuario.nombre || 'John  Doe';
        this.username = mi_usuario.username || 'johndoe';
        this.password = mi_usuario.password || 'johndoehohndoe';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(`
            INSERT INTO usuarios (nombre, username, password)
            VALUES (?, ?, ?)
        `, [this.nombre, this.username, this.password]);
    }

}