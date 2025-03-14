// src/components/LocationAccess.jsx
import React, { useEffect, useState } from 'react';
import { getLocation } from '../services/api';

const LocationAccess = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getLocation();
        setLocation(position.coords);
      } catch (error) {
        setError('Could not retrieve location. Please allow location access.');
      }
    };
    fetchLocation();
  }, []);

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-4">
      {location ? (
        <p className="text-lg text-gray-800">
          Your current location: Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};

export default LocationAccess;
