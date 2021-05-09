import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.style.css';
import { NavLink } from 'react-router-dom';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import PortfolioCard from './PortfolioCard';
import PortfolioData from '../../assets/data/PortfolioData';
import PortfolioHighlight from './PortfolioHighlight';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      <div className="container px-5">
        <div className="row mb-5" data-aos="fade-up">
          <div className="col">
            <h2 className="section-title">Some projects I&apos;ve built</h2>
          </div>
        </div>
        <div className="row my-4" data-aos="fade-up">
          <Swiper
            spaceBetween={50}
            slidesPerView="auto"
            loop
            grabCursor
          >
            {PortfolioData.map((portfolio) => (
              <SwiperSlide>
                <PortfolioHighlight
                  key={portfolio.id}
                  img={portfolio.image}
                  title={portfolio.title}
                  description={portfolio.description}
                  tags={portfolio.tags}
                  url={portfolio.url}
                  github={portfolio.github}
                />
              </SwiperSlide>
            )).reverse().slice(0, 3)}
          </Swiper>
        </div>

        <div className="row my-5 pt-5" data-aos="fade-up">
          <div className="col">
            <h2 className="section-title text-center mb-2">Other Projects</h2>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {PortfolioData.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              url={portfolio.url}
              github={portfolio.github}
              title={portfolio.title}
              description={portfolio.description}
              tags={portfolio.tags}
            />
          )).reverse().slice(3, 9)}
          <div className="col text-center">
            <NavLink className="btn btn-outline-info my-5 px-4 py-3 rounded-pill" to="/portfolios">Show more</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
