const db = require("../util/database"); //conecxion a la base de datos

/*
const hot_cakes = [
    {
        nombre: "belgas",
        imagen: "https://t1.uc.ltmcdn.com/es/posts/8/9/7/como_hacer_waffles_con_harina_de_hot_cakes_50798_paso_5_600.jpg",
        descripcion: "Hot cakes ricos",
        handle: "@belgas",
        ingredientes: "harina, huevo, mantequilla de normandía",
        precio: "150",
    },
    {
        nombre: "avena",
        imagen: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/99c36783d5de1a8cc8ab4a1494bcf111.jpg",
        descripcion: "Hot cakes ricos de avena",
        handle: "@avena",
        ingredientes: "harina de avena, huevo, mantequilla, plátano",
        precio: "150",
    },
    {
        nombre: "japoneses",
        imagen: "https://www.keyingredient.com/media/09/82/b08496cd78ddbd4bdda4f441160ddc6d4b15.jpg/rh/japanese-hot-cake.jpg",
        descripcion: "Hot cakes ricos de japón",
        handle: "@japoneses",
        ingredientes: "harina, claras de huevo, mantequilla, polvo para hornear, azúcar",
        precio: "150",
    },
    {
        nombre: "chocolate",
        imagen: "https://themerrymakersisters.com/wp-content/uploads/2017/01/BREKKY-FUNDAY-HOTCAKES-LANDSCAPE.jpg",
        descripcion: "Hot cakes ricos de chocolate",
        handle: "@chocolate",
        ingredientes: "harina, huevo, mantequilla, cocoa",
        precio: "150",
    },
    {
        nombre: "salados",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de avena",
        handle: "@salados",
        ingredientes: "harina, huevo, mantequilla con sal",
        precio: "150",
    },
    {
        nombre: "americanos",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos mantequillosos",
        handle: "@avena",
        ingredientes: "harina, huevo, mucha mantequilla, leche",
        precio: "150",
    },
    {
        nombre: "plátano",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@platano",
        ingredientes: "harina, huevo, mantequilla, plátano, canela, nueces",
        precio: "150",
    },
    {
        nombre: "minis",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@minis",
        ingredientes: "harina, huevo, mantequilla, leche, dispensador",
        precio: "80",
    },
];
*/


module.exports = class HotCakes 
{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_hot_cake) {
        this.nombre = mi_hot_cake.nombre || "Belgas";
        this.imagen = mi_hot_cake.imagen || "https://bulma.io/images/placeholders/1280x960.png";
        this.descripcion = mi_hot_cake.descripcion || "una descripcion"
        this.handle = mi_hot_cake.handle ||"Un delicioso Hot_cake";
        this.ingredientes = mi_hot_cake.ingredientes || "mantequilla, harina, huevo, leche";
        this.precio = mi_hot_cake.precio || "150";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() 
    {
        return db.execute(
            `INSERT INTO hotcakes (nombre, imagen, descripcion, handle, precio) 
            VALUES (?, ?, ?, ?, ?)`,
            [this.nombre, this.imagen, this.descripcion, this.handle, this.precio]

        );
    
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id) 
    {
        let query = `SELECT * FROM hotcakes`;
        if (id != 0  )
        {
            query += ' WHERE id = ?'
            return db.execute( query, [id])
        }
        return db.execute( query) //promesa
    }

}