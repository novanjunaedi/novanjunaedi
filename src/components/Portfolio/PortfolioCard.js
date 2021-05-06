import React from 'react';
import './Portfolio.style.css';

const PortfolioCard = (props) => (
  <div className="col-md-6 col-lg-4 my-3">
    <div className="card shadow portfolio-card-bg" style={{ minHeight: 320 }}>
      <div className="card-header">
        <div className="row">
          <div className="col py-3">
            <i className="fas fa-code text-info" style={{ fontSize: 35 }} />
          </div>
          <div className="col-3 ms-auto py-4">
            <a className="link text-white" target="_blank" rel="noopener noreferrer" href={props.url}>
              <i className="fas me-3 fa-external-link-alt" />
            </a>
            <a className="link text-white" target="_blank" rel="noopener noreferrer" href={props.github}>
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="section-title">{props.title}</h5>
        <p className="section-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">{props.tags}</small></p>
      </div>
    </div>
  </div>
);

export default PortfolioCard;
