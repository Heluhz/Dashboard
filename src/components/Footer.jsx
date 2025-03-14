// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-center p-3 mt-auto">
      <p className="text-sm text-gray-400">© 2025. All rights reserved.</p>
      <ul className="flex justify-center space-x-6 mt-4">
        <li><a href="/terms" className="hover:text-green-500">Terms</a></li>
        <li><a href="/privacy" className="hover:text-green-500">Privacy</a></li>
        <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
      </ul>
  </footer>
);

export default Footer;
