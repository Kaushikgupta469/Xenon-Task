const API_URL = 'http://localhost:5000/api/properties'; // Ensure this is correct

const getAll = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch properties');
    }
    return await response.json(); // Return the JSON response
};

export default { getAll };
