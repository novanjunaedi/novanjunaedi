import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.style.css';
import Logo from '../../assets/img/logo.png';
import NavItems from './NavItems';

const Navbar = () => {
  const [closeIcon, setCloseIcon] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', addShadow);

  return (
    <section>
      <nav className={navbar ? 'navbar navbar-expand-lg navbar-dark shadow bg-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'}>
        <div className="container py-2">
          <div className="navbar-brand">
            <img src={Logo} width="180" alt="Novan Junaedi" />
          </div>
          <button onClick={() => setCloseIcon((closeIcon) => !closeIcon)} className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {closeIcon ? closeIcon && <i className="fas fa-times text-info" /> : <i className="fas fa-bars text-info" />}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center text-lg-start ms-auto mb-2 mb-lg-0">
              {NavItems.map((item) => (
                <li className="nav-item mx-2" key={item.id}>
                  <Link className={item.cName} to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="d-grid gap-2 mx-5 mx-lg-2">
              <a className="btn-link btn btn-outline-info px-3" target="_blank" rel="noopener noreferrer" href="http://bit.ly/resume_novanjunaedi">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
