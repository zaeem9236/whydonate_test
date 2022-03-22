const mysql = require('mysql');

const initialise_db = (req, res, next) => {
    const db = mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6479699',
        password: 'aCsPAuKquz',
        database: 'sql6479699',
        port: 3306
    });

    db.connect(function (err) {
        if (err) {
            console.log('failed to initialise')
        } else {
            console.log('successfully initialised')
        }
    })


  
}

module.exports = { initialise_db }