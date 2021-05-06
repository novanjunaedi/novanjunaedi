import React from 'react';
import './Experience.style.css';

const certificate = [
  {
    id: 1,
    title: 'Belajar Dasar Pemrograman Web',
    institution: 'Dicoding Academy',
    date: 'July 2019',
    url: 'https://www.dicoding.com/certificates/VKEXL5E3YZG2',
  },
  {
    id: 2,
    title: 'Belajar Fundamental Front-End Web Development',
    institution: 'Dicoding Academy',
    date: 'April 2020',
    url: 'https://www.dicoding.com/certificates/2L4PQORMOXO1',
  },
  {
    id: 3,
    title: 'Membangun Progressive Web Apps',
    institution: 'Dicoding Academy',
    date: 'December 2019',
    url: 'https://www.dicoding.com/certificates/D98XW3WK4XM3',
  },
  {
    id: 4,
    title: 'Menjadi Frontend Web Developer Expert',
    institution: 'Dicoding Academy',
    date: 'August 2020',
    url: 'https://www.dicoding.com/certificates/2RVZKV2W4XD5',
  },
];

const CertificateList = () => (
  <>
    {certificate.map((data) => (
      <li key={data.id}>
        <h5 className="section-title">{data.title}</h5>
        <div className="row mb-3">
          <div className="col-md-4 section-text">
            <i className="fas fa-university text-info me-3" />
            {data.institution}
          </div>
          <div className="col-md-4 section-text">
            <i className="fas fa-calendar text-info me-3" />
            {data.date}
          </div>
        </div>
        <a className="link text-info" target="_blank" rel="noopener noreferrer" href={data.url}>
          View Certificate
          <i className="fas fa-external-link-alt ms-2" />
        </a>
      </li>
    )).reverse()}
  </>
);

export default CertificateList;
