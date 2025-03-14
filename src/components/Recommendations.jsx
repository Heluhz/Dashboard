// src/components/Recommendations.jsx
import React, { useEffect, useState } from 'react';
import { fetchRecommendations } from '../services/api';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecommendations = async () => {
      const data = await fetchRecommendations();
      setRecommendations(data);
      setLoading(false);
    };
    loadRecommendations();
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-gray-700">Recommended Actions</h2>
      {loading ? (
        <p className="text-gray-500">Loading recommendations...</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {recommendations.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
