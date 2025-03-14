import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; // For chart visualization
import 'chart.js/auto'; // Ensure chart.js is loaded
import AOS from 'aos'; // AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS

const Dashboard = () => {
  const [location, setLocation] = useState('');
  const [aqi, setAqi] = useState(null); // AQI value
  const [healthAlert, setHealthAlert] = useState(''); // Health status
  const [airQualityData, setAirQualityData] = useState({
    labels: [],
    datasets: [],
  });

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle Search Location and Fetch Data from Backend
  const handleSearch = async () => {
    if (!location) {
      alert("Please enter a location");
      return;
    }

    console.log('Searching for air quality in:', location);

    try {
      // Make a GET request to your backend to fetch the air quality data based on the city/region
      const response = await fetch(`https://openweathermap.org/api/air-pollution`);
      if (response.ok) {
        const data = await response.json();
        console.log('Air Quality Data:', data);
        
        // Update the state with the received data
        setAqi(data.aqi);
        setHealthAlert(data.healthAlert);

        // Assuming the backend also sends the data for trends
        setAirQualityData({
          labels: data.trends.labels, // Example: ['1 AM', '2 AM', '3 AM']
          datasets: [
            {
              label: 'AQI Levels',
              data: data.trends.data, // Example: [30, 45, 35]
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      } else {
        alert('City not found or error fetching data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  return (
    <div>
      {/* Location Search */}
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

      {/* Current Air Quality */}
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

      {/* Air Quality Trends */}
      <section className="py-8" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Air Quality Trends</h2>
          {airQualityData.labels && airQualityData.datasets.length > 0 ? (
            <Line data={airQualityData} />
          ) : (
            <p>Loading trends...</p>
          )}
        </div>
      </section>

      {/* Health Alerts */}
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
