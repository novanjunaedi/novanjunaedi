import React from 'react';

const PortfolioHighlight = (props) => (
  <>
    <div className="col-12 pb-3">
      <div className="card portfolio-card-bg rounded shadow border-0 text-white mb-3">
        <div className="row g-0">
          <div className="col-lg-7">
            <a target="_blank" rel="noopener noreferrer" href={props.url !== null ? props.url : null}>
              <img src={props.img} loading="lazy" className="img-fluid rounded" alt={props.title} />
            </a>
          </div>
          <div className="col-lg-5">
            <div className="card-body py-5">
              <h5 className="card-title">{props.title}</h5>
              <p className="section-text">{props.description}</p>
              <p className="card-text"><small className="text-info">{props.tags}</small></p>
              {props.url !== null ? (
                <a className="link text-info" target="_blank" rel="noopener noreferrer" href={props.url}>
                  <i className="fas fa-external-link-alt me-3" />
                </a>
              ) : (
                <i className="fas fa-external-link-alt text-muted me-3" />
              )}
              |
              {props.github !== null ? (
                <a className="link text-info" target="_blank" rel="noopener noreferrer" href={props.github}>
                  <i className="fab fa-github ms-3" />
                </a>
              ) : (
                <i className="fab fa-github text-muted ms-3" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PortfolioHighlight;
