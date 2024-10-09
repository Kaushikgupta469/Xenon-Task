import React, { useState, useEffect } from 'react';
import propertyService from '../services/propertyService';
import PropertyCard from './PropertyCard'; // Make sure to import PropertyCard
import NavBar from './NavBar'; // Import the NavBar component
import './PropertyList.css'; // Importing CSS

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await propertyService.getAll();
                setProperties(data);
                setFilteredProperties(data); // Initialize filtered properties
            } catch (error) {
                console.error('Error fetching properties:', error);
                setError(error.message); // Set error message
            }
        }
        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        const lowerCaseTerm = searchTerm.toLowerCase();
        const filtered = properties.filter(property => 
            property.title.toLowerCase().includes(lowerCaseTerm) || 
            property.description.toLowerCase().includes(lowerCaseTerm) ||
            property.location.toLowerCase().includes(lowerCaseTerm)
        );
        setFilteredProperties(filtered); // Update filtered properties
    };

    if (error) {
        return <div className="error">{error}</div>; // Display error if it exists
    }

    return (
        <div>
            <NavBar onSearch={handleSearch} /> {/* Include the NavBar with search function */}
            <div className="property-list">
                {filteredProperties.length === 0 ? (
                    <p>No properties available</p>
                ) : (
                    filteredProperties.map(property => (
                        <PropertyCard property={property} key={property._id} /> // Use PropertyCard component
                    ))
                )}
            </div>
        </div>
    );
};

export default PropertyList;
