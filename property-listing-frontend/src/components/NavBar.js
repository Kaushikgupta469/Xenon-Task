import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS for styling

const NavBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm); // Call the search function passed as a prop
        setSearchTerm(''); // Clear the search input after submitting
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Property Listings</Link>
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search properties..."
                        className="search-input"
                    />
                </form>
                <button type="submit" className="search-button">Search</button>
                <ul className="navbar-links">
                    <li><Link to="/properties">View Properties</Link></li>
                    <li><Link to="/recommendations">Get Recommendations</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
