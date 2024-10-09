const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
};
