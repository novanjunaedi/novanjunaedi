import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.style.css';
import aboutImg from '../../assets/img/about-img.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="about" id="about">
      <div className="container px-5">
        <div className="row justify-content-between" data-aos="fade-up">
          <div className="col-lg-7">
            <h2 className="section-title">About me</h2>
            <p className="section-text lead">
              Hi, my name is Novan Junaedi a web developer based in Bandung, West Java, Indonesia.
            </p>
            <p className="section-text lead">
              I really enjoy when I coding a program specially frontend because
              I like to make something that beautifull to see.
              My goals are to create usefull applications and build a startup in the future.
            </p>
            <p className="section-text lead">
              These are some of tool and technologies that I used recently
            </p>
            <div className="about-icons text-center text-md-start">
              <i className="fab fa-html5" />
              <i className="fab fa-css3-alt" />
              <i className="fab fa-js" />
              <i className="fab fa-react" />
              <i className="fab fa-laravel" />
              <i className="fab fa-bootstrap" />
              <i className="fab fa-node-js" />
            </div>
          </div>
          <div className="col-lg-5">
            <img src={aboutImg} className="img-fluid about-img" alt="Novan Junaedi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
