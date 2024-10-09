const express = require('express');
const { getProperties } = require('../controllers/propertyController');
const router = express.Router();

router.get('/', getProperties);  // Make sure this route exists

module.exports = router;
