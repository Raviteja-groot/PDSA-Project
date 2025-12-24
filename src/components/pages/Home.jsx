import React from 'react';
import HeroSection from '../sections/HeroSection';
import ClientsSection from '../sections/ClientsSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;