const mysql = require('mysql');
const { mysql_configuration } = require('../mysql_configuration/mysql_configuration')


const getOperation = (req, res, next) => { // initialise database when server starts
    const db = mysql.createConnection(mysql_configuration);
       let getUserCommand = `SELECT * FROM users`


    db.query(getUserCommand, (err, result) => {
        if (err) {
            res.status(400).send(err)
            console.log(err)
        } else {
            res.status(201).send(result)
            console.log(result)
        }
    })

}

module.exports = { getOperation }