// src/components/AnimatedNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedNav = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-400 transition duration-300">AQI Dashboard</Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/trends" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Trends
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/faqs" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Blog/News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AnimatedNav;  // Ensure this is a default export
