import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS for animations

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-cover bg-center h-screen bg-gray-900 text-white" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">About Us</h1>

        <p className="text-xl text-center mb-6" data-aos="fade-up" data-aos-delay="200">
          Welcome to the Air Quality Monitoring Dashboard. We provide real-time air quality information to help you stay informed and make healthier decisions.
        </p>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="400">
          <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to empower individuals and communities with accurate air quality information to promote better health and environmental decisions.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              We envision a world where everyone has access to clean air, and people are proactive about improving air quality for a healthier planet.
            </p>
          </div>
        </div>

        {/* Objective Section */}
        <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg mt-8" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold mb-4">Our Objective</h2>
          <p className="text-lg">
            Our objective is to build a platform that not only provides real-time air quality data but also educates and encourages people to take actionable steps towards reducing air pollution. By offering precise and timely information, we aim to improve public health and contribute to the global efforts in combating climate change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
