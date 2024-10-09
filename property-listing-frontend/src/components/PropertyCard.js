import React from 'react';
import './PropertyCard.css'; // Importing CSS for the card

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <h3 className="property-title">{property.title}</h3>
            <p className="property-description">{property.description}</p>
            <p className="property-price">Price: ${property.price}</p>
            <p className="property-location">Location: {property.location}</p>
            <p className="property-size">Size: {property.size}</p> {/* Display size here */}
        </div>
    );
};

export default PropertyCard;
