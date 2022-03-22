const mysql = require('mysql');
const { mysql_configuration } = require('../mysql_configuration/mysql_configuration')

const mysql_connection = (req, res, next) => {
    const db = mysql.createConnection(mysql_configuration);
    db.ping((err) => { // my sql connection ping response
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(500).send({ status: 'database connection is established' })
        }
    })
}

module.exports = { mysql_connection }