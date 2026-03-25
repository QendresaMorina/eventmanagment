const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'event_management',
    port: 3306
});

database.connect((err) => {
    if (err) {
        console.log('DB error:', err);
    } else {
        console.log('MySQL connected');
    }
});

module.exports = database;