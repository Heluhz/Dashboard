// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for air quality, city, or trends..."
          className="p-3 w-80 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
