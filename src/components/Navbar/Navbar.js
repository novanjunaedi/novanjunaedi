import React from 'react';
import './Navbar.style.css';
import Logo from '../../assets/img/logo.png';

const Navbar = () => (
  <section>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="!#">
          <img src={Logo} width="180" alt="Novan Junaedi" />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-info" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#top">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#portfolio">Work</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item mx-2">
              <a className="btn-link btn btn-outline-info px-3" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XRV7zAC7s1XORWrKMgr0rpF4W4GHmPPf/view?usp=sharing">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
);

export default Navbar;
