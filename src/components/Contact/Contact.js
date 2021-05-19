import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.style.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col text-center">
            <h2 className="section-title">Get in touch</h2>
            <p className="section-text lead w-50 mx-auto">For any bussiness inquiries, questions or if you wanna just say hi, you can leave me an email, I&apos;ll try my best to get back to you!</p>
            <a className="btn btn-outline-info my-5 px-5 py-3 rounded-pill" href="mailto:junaedinovan98@gmail.com">Say Hi!</a>

            <h5 className="section-title mt-5">Find me on social media</h5>
            <div className="py-3">
              <a className="hero-icon-link text-white mx-4" href="https://instagram.com/novanjunaedi" alt="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a className="hero-icon-link text-white mx-4" href="https://facebook.com/novanjunaedi98" alt="Facebook">
                <i className="fab fa-facebook" />
              </a>
              <a className="hero-icon-link text-white mx-4" href="https://twitter.com/novanjunaedi98" alt="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a className="hero-icon-link text-white mx-4" href="https://linkedin.com/in/novanjunaedi" alt="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a className="hero-icon-link text-white mx-4" href="https://github.com/novanjunaedi" alt="Github">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
