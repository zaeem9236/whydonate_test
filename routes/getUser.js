const express = require('express');
const router = express.Router();

// controllers
const { getOperation } = require('../controllers/getOperation')

router.post('/', getOperation)

module.exports = router