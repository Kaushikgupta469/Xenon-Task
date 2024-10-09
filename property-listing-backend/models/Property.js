const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String, required: false }, // Optional: Image URL
    size: { type: String, required: true } // Add this line for size
});

module.exports = mongoose.model('Property', PropertySchema);
