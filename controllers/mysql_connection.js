const mysql = require('mysql');

const mysql_connection = (req, res, next) => {
    const db = mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6479699',
        password: 'aCsPAuKquz',
        database: 'sql6479699',
        port: 3306
    });

    db.connect(function (err) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(500).send({ status: 'database connection established' })
        }
        next()
    })
}

module.exports = { mysql_connection }