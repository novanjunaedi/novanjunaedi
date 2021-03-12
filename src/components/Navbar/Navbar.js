import React, { Component } from 'react';
import './Navbar.style.css';
import Logo from '../../assets/img/logo.png';
import NavItems from './NavItems';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      close: true,
    };
  }

  changeIcon() {
    this.setState({ close: !this.state.close });
  }

  render() {
    const toggleIcon = this.state.close ? 'fas fa-bars text-info' : 'fas fa-times text-info';
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <img src={Logo} width="180" alt="Novan Junaedi" />
            </div>
            <button className="navbar-toggler border-0 shadow-none" onClick={this.changeIcon.bind(this)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className={toggleIcon} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav text-center text-lg-start ms-auto mb-2 mb-lg-0">
                {NavItems.map((item) => (
                  <li className="nav-item mx-2" key={item}>
                    <a className={item.cName} href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
              <div className="d-grid gap-2 mx-5 mx-lg-2">
                <a className="btn-link btn btn-outline-info px-3" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XRV7zAC7s1XORWrKMgr0rpF4W4GHmPPf/view?usp=sharing">Resume</a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
