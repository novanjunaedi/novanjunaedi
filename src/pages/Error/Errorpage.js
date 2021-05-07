import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoundImg from '../../assets/img/notfound-img.png';

const Errorpage = () => (
  <div>
    <div className="container text-white">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col text-center">
            <img className="mx-auto d-block" style={{ height: 200, width: 'auto' }} src={notFoundImg} loading="lazy" alt="404 Not Found" />
            <p className="lead text-info mb-5">Stop there buddy, you&apos;re lost.</p>
            <NavLink activeClassName="btn-outline-info" className="btn px-5 py-3 rounded-pill" to="/">Back</NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Errorpage;
