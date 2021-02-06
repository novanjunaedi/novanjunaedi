import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.style.css';
import arspiraImg from '../../assets/img/arspira.jpg';
import devseikoImg from '../../assets/img/devseiko.jpg';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      <div className="container px-5">
        <div className="row" data-aos="fade-up">
          <div className="col">
            <h2 className="section-title">Some projects I&apos;ve built</h2>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-12" data-aos="slide-up">
            <div className="card portfolio-card-bg shadow border-0 text-white mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <a href="https://arspira.com">
                    <img src={arspiraImg} className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="col-md-5">
                  <div className="card-body py-5">
                    <h5 className="card-title">Arspira</h5>
                    <p className="section-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-info">HTML 5, CSS 3, Laravel, Bootstrap</small></p>
                    <a className="link text-info" href="https://arspira.com">
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-4" data-aos="slide-up">
            <div className="card portfolio-card-bg shadow border-0 text-white mb-3">
              <div className="row g-0">
                <div className="col-md-7 d-block d-md-none">
                  <a href="!#">
                    <img src={devseikoImg} className="img-fluid" alt="Devseiko" />
                  </a>
                </div>
                <div className="col-md-5">
                  <div className="card-body py-5">
                    <h5 className="card-title">Devseiko</h5>
                    <p className="section-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-info">HTML 5, CSS 3, Laravel, Bootstrap</small></p>
                    <a className="link text-info" href="!#">
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7 d-none d-md-block">
                  <a href="!#">
                    <img src={devseikoImg} className="img-fluid" alt="Devseiko" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 pt-5" data-aos="fade-up">
          <div className="col">
            <h2 className="section-title text-center">Other Projects</h2>
          </div>
        </div>
        <div className="row" data-aos="slide-up">
          <PortfolioCard />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
