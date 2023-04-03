const db = require('../util/database');

module.exports = class HotCake {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_hot_cake) {
        this.nombre = mi_hot_cake.nombre || "Belgas";
        this.imagen = mi_hot_cake.imagen || "hotcakes.jpg";
        this.descripcion = mi_hot_cake.descripcion || "Un delicioso hot cake";
        this.handle = mi_hot_cake.handle || "@hot_cake";
        this.ingredientes = mi_hot_cake.ingredientes || "mantequilla, harina, huevo y leche";
        this.precio = mi_hot_cake.precio || "150";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            `INSERT INTO hotcakes(nombre, imagen, descripcion, handle, precio) 
            VALUES(?, ?, ?, ?, ?)`,
            [this.nombre, this.imagen, this.descripcion, this.handle, this.precio]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id) {
        let query = `SELECT * FROM hotcakes`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        } 
        return db.execute(query);
    }

    static find(valor_busqueda) {
        return db.execute(`
            SELECT * 
            FROM hotcakes
            WHERE nombre LIKE ? OR descripcion LIKE ? OR handle LIKE ?
            `, 
            [
                '%' + valor_busqueda + '%', '%' + valor_busqueda + '%', 
                '%' + valor_busqueda + '%'
            ]
        );
    }
}
