import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}