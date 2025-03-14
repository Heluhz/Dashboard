import React, { useEffect } from 'react';
import AOS from 'aos'; // If you're using AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS

const HomePage = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      {/* Hero Section with Animation */}
      <section className="relative bg-cover bg-center h-screen " style={{ backgroundImage: 'url(p1.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold">Monitor Air Quality in Real-Time</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl mt-4">Stay informed and take action to improve the air quality around you.</p>
          <a href="/dashboard">
            <button data-aos="fade-up" data-aos-delay="400" className="bg-gray-700 text-white py-2 px-6 rounded-lg mt-6 text-xl hover:bg-gray-800 transition duration-300">
              Check Air Quality Now
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" className="transition transform hover:scale-105">
              <img src="p2.jpg" alt="Feature 1" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Real-Time Monitoring</h3>
              <p>Get instant updates on air quality in your area.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="transition transform hover:scale-105">
              <img src="p3.jpg" alt="Feature 2" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Historical Trends</h3>
              <p>See how air quality has changed over time with our visualized trends.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="transition transform hover:scale-105">
              <img src="p4.jpg" alt="Feature 3" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Health Warnings</h3>
              <p>Receive health-related alerts based on current air quality levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-700 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Ready to Monitor Air Quality?</h2>
        <p className="text-lg mt-4">Join us and start tracking real-time air quality data.</p>
        <a href="/dashboard">
          <button className="bg-white text-gray-700 py-2 px-6 rounded-lg mt-6 text-xl hover:bg-gray-200 transition duration-300">
            Check Air Quality Now
          </button>
        </a>
      </section>
    </div>
  );
};

export default HomePage;
