const mysql = require('mysql');
const { mysql_configuration } = require('../mysql_configuration/mysql_configuration')

const initialise_db = (req, res, next) => { // initialise database when server starts
    const db = mysql.createConnection(mysql_configuration);
    db.connect(function (err) { // console message of server initial connection
        if (err) {
            console.log('failed to initialise')
        } else {
            console.log('successfully initialised')
        }
    })

    
}

module.exports = { initialise_db }