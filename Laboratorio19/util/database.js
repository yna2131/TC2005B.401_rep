//esto jala la libreria de la 

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', //donde lo hosteamos
    user: 'root',   
    database: 'hot_cakes',
    password: '' //si estoy desarrollando va vacio
});

module.exports = pool.promise(); //promesa en js = lit espero que me cumpla mi promesa