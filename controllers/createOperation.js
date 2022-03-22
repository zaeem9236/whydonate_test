const mysql = require('mysql');
const { mysql_configuration } = require('../mysql_configuration/mysql_configuration')


const createOperation = (req, res, next) => { // initialise database when server starts
    const db = mysql.createConnection(mysql_configuration);
    
console.log(req.body)
    let createUserCommand = `INSERT INTO users VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.password}');`

    // let createUserCommand = `SELECT * FROM users`
    db.query(createUserCommand, (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send(result)
        }
    })

}

module.exports = { createOperation }