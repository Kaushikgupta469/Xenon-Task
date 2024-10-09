import React, { useState } from 'react';
import authService from '../services/authService';
import './Login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authService.login(email, password);
      localStorage.setItem('token', token);
      // Redirect to properties page
      window.location.href = '/properties';
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
