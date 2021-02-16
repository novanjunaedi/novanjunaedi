import React, { useState, useEffect } from 'react';
import './App.css';
import BounceLoader from 'react-spinners/BounceLoader';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Logo from './assets/img/logo.png';

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
          <>
            <Navbar />
            <Homepage />
            <Footer />
          </>
        )}
    </div>
  );
};

export default App;
