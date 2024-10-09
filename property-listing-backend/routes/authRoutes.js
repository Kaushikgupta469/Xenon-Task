const express = require('express');
const { login, signup } = require('../controllers/authController');  // Import signup
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);  // Add signup route

module.exports = router;
