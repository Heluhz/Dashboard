import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import AnimatedNav from './components/AnimatedNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Trends from './pages/Trends';
import './styles/tailwind.css'; 
import FAQs from './components/FAQs';
import Blog from './components/Blog'; 

const App = () => {
  return (
    <Router>
      <div>
        <AnimatedNav />
        <div className="container mx-auto p-4">
          <Routes>  
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/faqs" element={<FAQs />} /> {/* Fixed here */}
            <Route path="/blog" element={<Blog />} /> {/* Fixed here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
