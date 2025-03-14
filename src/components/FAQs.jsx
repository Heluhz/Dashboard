import React, { useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// FAQ data
const faqData = [
  {
    question: "What is Air Quality Index (AQI)?",
    answer: "AQI is a numerical scale used to measure and report air quality. The higher the AQI value, the more polluted the air is.",
  },
  {
    question: "How often is the air quality data updated?",
    answer: "The data is updated every hour based on sensor readings from various locations.",
  },
  {
    question: "What do different AQI levels mean?",
    answer: "0-50: Good, 51-100: Moderate, 101-150: Unhealthy for sensitive groups, 151-200: Unhealthy, 201-300: Very Unhealthy, 301+: Hazardous.",
  },
  {
    question: "How can I reduce my exposure to air pollution?",
    answer: "Limit outdoor activities during high AQI levels, wear a mask, and use air purifiers indoors.",
  },
  {
    question: "Does this dashboard support real-time monitoring?",
    answer: "Yes! Our system fetches real-time air quality data from various environmental agencies.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  // Initialize AOS animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Only animate once
    });
  }, []);

  // Toggle open/close FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">
          Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 rounded-md border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          data-aos="fade-right"
        />

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-md p-4"
                data-aos="zoom-in-up"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-lg font-semibold flex justify-between items-center"
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No matching FAQs found.</p>
          )}
        </div>

        {/* Contact Support Link */}
        <div className="text-center mt-6" data-aos="fade-up">
          <p className="text-gray-300">
            Can't find your question? <a href="/contact" className="text-blue-400 underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
