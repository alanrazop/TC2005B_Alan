const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'labAlan',
    password: 'root',
    port: 8889
});

module.exports = pool.promise();