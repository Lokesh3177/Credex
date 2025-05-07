import React from 'react';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWorks';
import WhyChooseUs from './Components/WhyChooseUs';
import Testimonials from './Components/Testimonials';
import ContactForm from './Components/ContactForm';

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
