import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchHistoricalAQI, fetchAQIForecast, fetchCityComparison } from "../api/aqiService";

const Trends = () => {
  const [historicalData, setHistoricalData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [cityComparisonData, setCityComparisonData] = useState(null);

  // Fetch data from the backend when the component loads
  useEffect(() => {
    const fetchData = async () => {
      const history = await fetchHistoricalAQI();
      const forecast = await fetchAQIForecast();
      const comparison = await fetchCityComparison();
      setHistoricalData(history);
      setForecastData(forecast);
      setCityComparisonData(comparison);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Air Quality Trends</h1>

      {/* Historical AQI Chart */}
      {historicalData && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Historical AQI Trends</h2>
          <Line
            data={{
              labels: historicalData.dates,
              datasets: [
                {
                  label: "AQI Levels",
                  data: historicalData.values,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
          />
        </div>
      )}

      {/* AQI Forecast */}
      {forecastData && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Next 7-Day AQI Forecast</h2>
          <Bar
            data={{
              labels: forecastData.dates,
              datasets: [
                {
                  label: "Predicted AQI",
                  data: forecastData.values,
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      )}

      {/* City AQI Comparison */}
      {cityComparisonData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Compare AQI Between Cities</h2>
          <Bar
            data={{
              labels: cityComparisonData.cities,
              datasets: [
                {
                  label: "AQI Levels",
                  data: cityComparisonData.values,
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Trends;
