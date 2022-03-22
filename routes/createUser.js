const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

// controllers
const { createOperation } = require('../controllers/createOperation')
router.post('/', createOperation)

module.exports = router