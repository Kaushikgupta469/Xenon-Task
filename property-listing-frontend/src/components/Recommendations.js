import React, { useState, useEffect } from 'react';
import aiRecommendationService from '../services/aiRecommendationService';
import './Recommendations.css'; // Importing CSS for styling

const Recommendations = () => {
    const [recommendedProperties, setRecommendedProperties] = useState([]);
    const [error, setError] = useState(null); // State to handle errors
    const [preferences, setPreferences] = useState('I want a house near the beach.'); // Sample preferences

    useEffect(() => {
        async function fetchRecommendations() {
            try {
                const data = await aiRecommendationService.getRecommendations(preferences);
                setRecommendedProperties(data.recommendations); // Set the recommendations received
            } catch (error) {
                console.error('Error fetching recommendations:', error);
                setError(error.message); // Set error message
            }
        }
        // Initial fetch on component mount
        fetchRecommendations();
    }, []); // Empty dependency array means this runs once on mount

    const handlePreferencesChange = (e) => {
        setPreferences(e.target.value); // Update preferences state
    };

    const handleFetchRecommendations = async () => {
        try {
            const data = await aiRecommendationService.getRecommendations(preferences); // Fetch recommendations
            setRecommendedProperties(data.recommendations); // Update state with new recommendations
        } catch (error) {
            console.error('Error fetching recommendations:', error);
            setError(error.message); // Set error message
        }
    };

    if (error) {
        return <div className="error">{error}</div>; // Display error if it exists
    }

    return (
        <div className="recommendation-list">
            <h2>Get Property Recommendations</h2>
            <textarea 
                value={preferences}
                onChange={handlePreferencesChange}
                placeholder="Enter your preferences for property recommendations..."
                rows="4"
                style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            />
            <button onClick={handleFetchRecommendations}>Get Recommendations</button> Button to trigger recommendations

            <div>
                {recommendedProperties.length === 0 ? (
                    <p>No recommendations available</p>
                ) : (
                    recommendedProperties.map((property, index) => (
                        <div key={index}>
                            <h3>{property.title}</h3>
                            <p>{property.description}</p>
                            <p>Price: ${property.price}</p>
                            <p>Location: {property.location}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Recommendations;
