import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with your backend URL

// Fetch historical AQI data
export const fetchHistoricalAQI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/historical-aqi`);
    return response.data;
  } catch (error) {
    console.error("Error fetching historical AQI data:", error);
    return [];
  }
};

// Fetch forecast AQI data
export const fetchAQIForecast = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forecast`);
    return response.data;
  } catch (error) {
    console.error("Error fetching AQI forecast data:", error);
    return [];
  }
};

// Fetch city comparison data
export const fetchCityComparison = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/compare-cities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching city comparison data:", error);
    return [];
  }
};
