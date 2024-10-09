import React, { useState } from 'react';
import authService from '../services/authService';
import './SignUp.css'; // Importing CSS

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.signup(email, password);  // Call the signup function
            alert('Registration successful! Please log in.');
            window.location.href = '/login';  // Redirect to login
        } catch (err) {
            alert('Registration failed! Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
