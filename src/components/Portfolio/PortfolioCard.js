import React from 'react';
import './Portfolio.style.css';

const portfolioData = [
  {
    id: '1',
    title: 'Weesantai',
    description: 'This website basically is a website that provides the latest information of travel destination. I built it with my friends to complete school project submission.',
    image: '',
    tags: 'HTML 5, CSS 3, Laravel, Bootstrap',
    url: '',
  },

  {
    id: '2',
    title: 'Covid Tracker',
    description: 'Covid Tracker is a simple web app that provides the latest information of covid-19 spreading around the world. I built this while the beginning of pandemic.',
    image: '',
    tags: 'React, Bootstrap, Material UI',
    url: '',
  },
  {
    id: '3',
    title: 'Foodlicious',
    description: 'Foodlicious is a simple web that I built using React for completing react js course at Codepolitan.',
    image: '',
    tags: 'React, Bootstrap',
    url: '',
  },
  {
    id: '4',
    title: 'Soccer Nation',
    description: '',
    image: '',
    tags: 'HTML 5, CSS 3, Javascript, Materialize CSS',
    url: '',
  },
  {
    id: '5',
    title: 'Eatzy',
    description: '',
    image: '',
    tags: 'HTML 5, CSS 3, Javascript, Webpack',
    url: '',
  },
  {
    id: '6',
    title: 'Laravel Codespace',
    description: '',
    image: '',
    tags: 'Laravel, Bootstrap, Here Maps API',
    url: '',
  },
];

const PortfolioCard = () => (
  <>
    {portfolioData.map((data) => (
      <div className="col-md-6 col-lg-4 my-3" key={data.id}>
        <div className="card shadow portfolio-card-bg" style={{ minHeight: 320 }}>
          <div className="card-header">
            <div className="row">
              <div className="col py-3">
                <i className="fas fa-code text-info" style={{ fontSize: 35 }} />
              </div>
              <div className="col-2 mx-auto py-4">
                <a className="link text-white" href={data.url}>
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="section-title">{data.title}</h5>
            <p className="section-text">{data.description}</p>
            <p className="card-text"><small className="text-muted">{data.tags}</small></p>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default PortfolioCard;
