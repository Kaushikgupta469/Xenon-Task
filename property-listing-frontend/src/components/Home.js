import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Property Listings</h1>
      <p>Discover the best properties for sale and rent. Get personalized recommendations based on your preferences.</p>
      
      <div className="home-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>  {/* Add Sign Up button */}
        <Link to="/login" className="btn">Login</Link>
        <Link to="/login" className="btn">View Properties</Link>
        <Link to="/login" className="btn">Get Recommendations</Link>
      </div>
    </div>
  );
}

export default Home;
