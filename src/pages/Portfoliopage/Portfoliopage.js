import React from 'react';
import portfolioData from '../../assets/data/PortfolioData';

const Portfoliopage = () => (
  <div className="container px-5">
    <div className="row py-5 mt-5 justify-content-between">
      <div className="col">
        <h1 className="text-white mt-3 pt-5">All Portfolios</h1>
        <p className="lead text-info">List of all the portfolios that I&apos;ve made</p>
      </div>
    </div>
    <div className="row mb-5 pb-5">
      <div className="col">
        <table className="table table-borderless table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Title</th>
              <th scope="col" className="d-none d-md-block">Built with</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((portfolio) => (
              <tr key={portfolio.id}>
                <th scope="row">{portfolio.year}</th>
                <td>{portfolio.title}</td>
                <td className="d-none d-md-block">{portfolio.tags}</td>
                <td>
                  {portfolio.url !== '' ? (
                    <a className="link text-info" href={portfolio.url} target="_blank" rel="noreferrer">
                      <i className="fas me-2 fa-external-link-alt" />
                    </a>
                  ) : (
                    <i className="fas me-2 fa-external-link-alt text-muted" />
                  )}
                  |
                  { portfolio.github !== ''
                    ? (
                      <a className="link text-info" href={portfolio.github} target="_blank" rel="noreferrer">
                        <i className="fab ms-2 fa-github" />
                      </a>
                    ) : (
                      <i className="fab ms-2 fa-github text-muted" />
                    )}
                </td>
              </tr>
            )).reverse()}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Portfoliopage;
