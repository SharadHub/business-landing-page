import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimatedSection from './components/ui/AnimatedSection';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <AnimatedSection id="features">
        <Features />
      </AnimatedSection>
      
      <AnimatedSection id="how-it-works">
        <HowItWorks />
      </AnimatedSection>
      
      <AnimatedSection id="testimonials">
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection id="pricing">
        <Pricing />
      </AnimatedSection>
      
      <AnimatedSection id="faq">
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      
      <Footer />
      
      <WhatsAppButton phoneNumber="1234567890" message="Hello! I am interested in ProjectFlow." />
    </div>
  );
}

export default App;
