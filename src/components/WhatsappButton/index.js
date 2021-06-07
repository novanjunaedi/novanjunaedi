import React from 'react';
import './index.style.css';

const whatsappButton = () => (
  <div>
    <a href="https://api.whatsapp.com/send?phone=+6285720163734&text=Halo%20Novan,%20Saya%20mau%20bertanya%20tentang%20layanan%20website." className="float" target="_blank" rel="noreferrer">
      <i className="fab fa-whatsapp my-float" />
    </a>
  </div>
);

export default whatsappButton;
