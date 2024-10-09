import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PropertyList from './components/PropertyList';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact'; 
import Recommendations from './components/Recommendations';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/properties" element={<PropertyList />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recommendations" element={<Recommendations />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
