const axios = require('axios');

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M';
const API_TOKEN = process.env.HUGGING_FACE_TOKEN; // Replace with your actual Hugging Face API token

const getRecommendations = async (req, res) => {
    const { preferences } = req.body; // User preferences for recommendation

    if (!preferences) {
        return res.status(400).json({ message: 'Preferences are required.' });
    }

    try {
        const response = await axios.post(HUGGING_FACE_API_URL, {
            inputs: preferences,
        }, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`
            }
        });

        const recommendations = response.data[0].generated_text; // Get the generated text
        res.json({ recommendations }); // Return recommendations to the client
    } catch (error) {
        console.error('Error generating recommendations:', error);
        res.status(500).json({ message: 'Error generating recommendations' });
    }
};

module.exports = { getRecommendations }; // Use CommonJS export
