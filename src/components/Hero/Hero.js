import React from 'react';
import 'aos/dist/aos.css';
import './Hero.style.css';
import heroImg from '../../assets/img/hero-img.svg';

const Hero = () => (
  <section className="hero">
    <div className="container px-5">
      <div className="row mt-5 justify-content-between" data-aos="fade-in">
        <div className="col-lg-6 my-5">
          <h2 className="hero-subtitle">Hi, I&apos;m</h2>
          <h1 className="hero-title">Novan Junaedi</h1>
          <p className="hero-text lead">Junior Frontend Developer | UI Enthusiast.</p>
          <div className="d-grid d-md-block mt-4 mx-auto gap-2">
            <a className="btn btn-outline-info rounded-pill py-3 px-5" href="mailto:junaedinovan98@gmail.com">Get in touch</a>
          </div>
          <div className="mt-5 py-3 text-center text-md-start">
            <a className="hero-icon-link text-white mx-4 ms-md-1 me-md-4" target="_blank" rel="noopener noreferrer" href="https://instagram.com/novanjunaedi" alt="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a className="hero-icon-link text-white mx-4" target="_blank" rel="noopener noreferrer" href="https://facebook.com/novanjunaedi98" alt="Facebook">
              <i className="fab fa-facebook" />
            </a>
            <a className="hero-icon-link text-white mx-4" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/novanjunaedi" alt="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a className="hero-icon-link text-white mx-4" target="_blank" rel="noopener noreferrer" href="https://github.com/novanjunaedi" alt="Github">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 my-5 d-none d-lg-block">
          <img src={heroImg} className="img-fluid" loading="lazy" alt="Hero" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
