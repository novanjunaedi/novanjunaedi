import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Experience.style.css';
import CertificateList from './CertificateList';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="experience" id="experience">
      <div className="container px-5">
        <div className="row" data-aos="fade-up">
          <div className="col">
            <h2 className="section-title mb-4">My Experiences</h2>
            <div className="row d-flex align-items-start">
              <div className="col-md-3">
                <div className="nav flex-md-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-working-tab" data-bs-toggle="pill" href="#v-pills-working" role="tab" aria-controls="v-pills-working" aria-selected="true">Working Experience</a>
                  <a className="nav-link" id="v-pills-learning-tab" data-bs-toggle="pill" href="#v-pills-volunteering" role="tab" aria-controls="v-pills-learning" aria-selected="false">Volunteering Experience</a>
                  <a className="nav-link" id="v-pills-learning-tab" data-bs-toggle="pill" href="#v-pills-learning" role="tab" aria-controls="v-pills-learning" aria-selected="false">Certifications</a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content section-text ms-3" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-working" role="tabpanel" aria-labelledby="v-pills-working-tab">
                    <div className="row">
                      <div className="col">
                        <h4 className="section-title">
                          Forum Maintainer at
                          {' '}
                          <a className="link text-info" target="_blank" rel="noopener noreferrer" href="https://codepolitan.com">Codepolitan</a>
                          {' '}
                          (Part-time)
                        </h4>
                        <p className="section-subtitle">December 2020 - Present</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li className="text-info">
                            <p className="section-text">Do periodic checks on the forum and answer questions that have not been solved</p>
                          </li>
                          <li className="text-info">
                            <p className="section-text">Helping users get solutions to problems experienced in the programs they create</p>
                          </li>
                          <li className="text-info">
                            <p className="section-text">Report every issue that occurs in the forum to the related admin</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <h4 className="section-title">
                          Forum Maintainer, Article Writer at
                          {' '}
                          <a className="link text-info" target="_blank" rel="noopener noreferrer" href="https://codepolitan.com">Codepolitan</a>
                          {' '}
                          (Internship)
                        </h4>
                        <p className="section-subtitle">August 2020 - December 2020</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li className="text-info">
                            <p className="section-text">Do periodic checks on the forum and answer questions that have not been solved</p>
                          </li>
                          <li className="text-info">
                            <p className="section-text">Helping users get solutions to problems experienced in the programs they create</p>
                          </li>
                          <li className="text-info">
                            <p className="section-text">Report every issue that occurs in the forum to the related admin</p>
                          </li>
                          <li className="text-info">
                            <p className="section-text">Writing articles about programming stuff</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-learning" role="tabpanel" aria-labelledby="v-pills-learning-tab">
                    <ul className="timeline">
                      <CertificateList />
                    </ul>
                    <a className="btn btn-outline-info px-3 mt-4 ms-5" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/novanjunaedi/">More Certificates</a>
                  </div>
                  <div className="tab-pane fade" id="v-pills-volunteering" role="tabpanel" aria-labelledby="v-pills-volunteering-tab">
                    <ul className="timeline">
                      <li>
                        <h5 className="section-title">Fasilitator MFWDE Baparekraf Digital Talent 2021</h5>
                        <p className="section-text">May 2021</p>
                        <p className="section-text">Organized by Dicoding, Kemenparekraf.</p>
                        <a className="link text-info" target="_blank" rel="noopener noreferrer" href="!#">
                          View Certificate
                          <i className="fas fa-external-link-alt ms-2" />
                        </a>
                      </li>
                      <li>
                        <h5 className="section-title">Volunteer Re-Cloud Challenges Indonesia 2021</h5>
                        <p className="section-text">January - February 2021</p>
                        <p className="section-text">Organized by Codepolitan, Alibaba Cloud.</p>
                        <a className="link text-info" target="_blank" rel="noopener noreferrer" href="!#">
                          View Certificate
                          <i className="fas fa-external-link-alt ms-2" />
                        </a>
                      </li>
                      <li>
                        <h5 className="section-title">Asisten Mentor Pelatihan Instruktur Swasta Program Junior Web Programmer 2020</h5>
                        <p className="section-text">23 November - 29 November 2020</p>
                        <p className="section-text">Organized by Codepolitan, Bina Intala (Kemnaker).</p>
                        <a className="link text-info" target="_blank" rel="noopener noreferrer" href="!#">
                          View Certificate
                          <i className="fas fa-external-link-alt ms-2" />
                        </a>
                      </li>
                      <li>
                        <h5 className="section-title">Fasilitator Program Indosat Ooredoo Digital Camp 2020</h5>
                        <p className="section-text">March - May 2020</p>
                        <p className="section-text">Organized by Dicoding, Indosat Ooredoo.</p>
                        <a className="link text-info" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1bZCaYvP2d-0gLMqAV5IDbW-K46V7A5WZ/view?usp=sharing">
                          View Certificate
                          <i className="fas fa-external-link-alt ms-2" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
