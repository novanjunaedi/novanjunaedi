import React, { useState, useEffect } from 'react';
import './App.css';
import BounceLoader from 'react-spinners/BounceLoader';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Logo from './assets/img/logo.png';
import Routes from './Routes/Routes';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading
        ? (
          <div className="loading">
            <BounceLoader color="#0dcaf0" loading={loading} size={55} />
            <img src={Logo} alt="loading" />
          </div>
        )
        : (
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes />
            <Footer />
          </Router>
        )}
    </div>
  );
};

export default App;
