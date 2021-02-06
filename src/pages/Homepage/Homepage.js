import React, { Component } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Experience from '../../components/Experience/Experience';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';

class Homepage extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </>
    );
  }
}

export default Homepage;
