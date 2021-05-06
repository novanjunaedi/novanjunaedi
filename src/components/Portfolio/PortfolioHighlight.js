import React from 'react';

const PortfolioHighlight = (props) => (
  <>
    <div className="col-12 pb-3">
      <div className="card portfolio-card-bg shadow border-0 text-white mb-3">
        <div className="row g-0">
          <div className="col-lg-7">
            <a target="_blank" rel="noopener noreferrer" href={props.url}>
              <img src={props.img} loading="lazy" className="img-fluid" alt={props.title} />
            </a>
          </div>
          <div className="col-lg-5">
            <div className="card-body py-5">
              <h5 className="card-title">{props.title}</h5>
              <p className="section-text">{props.description}</p>
              <p className="card-text"><small className="text-info">{props.tags}</small></p>
              <a className="link text-info" target="_blank" rel="noopener noreferrer" href={props.url}>
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PortfolioHighlight;
