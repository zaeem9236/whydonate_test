const express = require('express');
const router = express.Router();

// controllers
const { mysql_connection } = require('../controllers/mysql_connection')

router.get('/connect', mysql_connection)

module.exports = router