const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hot_cakes',
    password: '',
});

module.exports = pool.promise();