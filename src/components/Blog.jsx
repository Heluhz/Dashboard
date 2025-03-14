import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS library for animations
import 'aos/dist/aos.css'; // Import AOS CSS

const Blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Latest News & Blogs</h1>
      <div className="space-y-6">
        
        {/* Blog Post 1 */}
        <div 
          className="bg-gray-800 p-6 rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out" 
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-blue-500 hover:text-white transition duration-300">Understanding the Impact of Air Pollution on Health</h2>
          <p className="mt-2 text-gray-300">
            Air pollution poses a significant risk to human health. In this blog post, we explore the various diseases linked to long-term exposure to polluted air.
          </p>
          <a href="/" className="text-blue-500 mt-2 inline-block hover:text-white transition duration-300">Read More</a>
        </div>

        {/* Blog Post 2 */}
        <div 
          className="bg-gray-800 p-6 rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-blue-500 hover:text-white transition duration-300">How Our Dashboard Helps Combat Air Pollution</h2>
          <p className="mt-2 text-gray-300">
            Our air quality monitoring system offers real-time data to help communities and individuals make informed decisions to minimize exposure to harmful air pollutants.
          </p>
          <a href="/" className="text-blue-500 mt-2 inline-block hover:text-white transition duration-300">Read More</a>
        </div>

        {/* Blog Post 3 */}
        <div 
          className="bg-gray-800 p-6 rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-semibold text-blue-500 hover:text-white transition duration-300">Global Efforts to Tackle Climate Change and Air Quality</h2>
          <p className="mt-2 text-gray-300">
            A look at international strategies and policies that are being implemented to reduce air pollution and address climate change issues globally.
          </p>
          <a href="/" className="text-blue-500 mt-2 inline-block hover:text-white transition duration-300">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
