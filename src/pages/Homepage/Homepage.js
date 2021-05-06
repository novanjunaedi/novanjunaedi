import React from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Experience from '../../components/Experience/Experience';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';

const Homepage = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
  </>
);

export default Homepage;
