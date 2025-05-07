import React from 'react';
import Hero from './Components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import './App.css';
// import './index.css'; // Uncomment if you have a global CSS file

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
