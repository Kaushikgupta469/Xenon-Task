const express = require('express');
const { getRecommendations } = require('../controllers/aiRecommendationController'); // Import AI recommendation controller
const router = express.Router();

router.post('/', getRecommendations); // Handle POST requests to /api/recommendations

module.exports = router; // Use CommonJS export
