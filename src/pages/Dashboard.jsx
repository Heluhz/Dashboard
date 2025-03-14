import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import AOS from 'aos';
import 'aos/dist/aos.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Dashboard = () => {
  const [location, setLocation] = useState('');
  const [aqi, setAqi] = useState(null);
  const [healthAlert, setHealthAlert] = useState('');
  const [airQualityData, setAirQualityData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSearch = async () => {
    if (!location) {
      alert("Please enter a location");
      return;
    }

    try {
      const geoResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
      );

      if (!geoResponse.ok) {
        alert('City not found');
        return;
      }

      const geoData = await geoResponse.json();
      if (geoData.length === 0) {
        alert('Location not found');
        return;
      }

      const { lat, lon } = geoData[0];

      const aqiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!aqiResponse.ok) {
        alert('Error fetching air quality data');
        return;
      }

      const aqiData = await aqiResponse.json();
      console.log('Air Quality Data:', aqiData);

      const aqiValue = aqiData.list[0].main.aqi;

      const healthMessages = [
        'Good Air Quality',
        'Fair Air Quality',
        'Moderate Air Quality',
        'Poor Air Quality',
        'Very Poor Air Quality',
      ];

      setAqi(aqiValue);
      setHealthAlert(healthMessages[aqiValue - 1]);

      setAirQualityData({
        labels: ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM'],
        datasets: [
          {
            label: 'AQI Levels',
            data: Array.from({ length: 10 }, () => aqiValue * (Math.random() + 0.5)), // Simulated trend
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });

    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  return (
    <div>
      <section className="bg-gray-700 text-white py-8" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Check Air Quality for Your Location</h2>
          <input
            type="text"
            placeholder="Enter City or Region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded-lg text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg ml-4 transform hover:scale-105 transition duration-300"
            data-aos="fade-up" data-aos-delay="100"
          >
            Search
          </button>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-8" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Current Air Quality</h2>
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-blue-500 p-8 rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl mb-4">AQI Level</h3>
              <div className="text-6xl font-bold">{aqi !== null ? aqi : 'N/A'}</div>
              <div className="text-lg mt-2">{healthAlert || 'N/A'}</div>
            </div>
          </div>
          <div className="text-lg mt-4">Last Updated: Just Now</div>
        </div>
      </section>

      <section className="py-8" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Air Quality Trends</h2>
          {airQualityData.labels.length > 0 ? (
            <Line data={airQualityData} />
          ) : (
            <p>Loading trends...</p>
          )}
        </div>
      </section>

      {healthAlert && (
        <section className="bg-yellow-500 text-black py-8" data-aos="fade-up" data-aos-delay="400">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Health Alert</h3>
            <p className="text-lg mb-6">{healthAlert}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
