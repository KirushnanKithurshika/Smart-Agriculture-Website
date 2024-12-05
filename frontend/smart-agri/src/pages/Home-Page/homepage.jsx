import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import Logo from '../../assets/slogo.png';
import BackgroundImage from '../../assets/BG-login.jpg';

const farms = [
    { id: 'farmA', name: 'Farm A', link: '/dashboard' },
    { id: 'farmB', name: 'Farm B', link: '/dashboard' },
    { id: 'farmC', name: 'Farm C', link: '/dashboard' },
    { id: 'farmD', name: 'Farm D', link: '/dashboard' },
    { id: 'farmE', name: 'Farm E', link: '/dashboard' },
  ];

// In Farms.js
const Farms = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <img className=" Logo" src={Logo} alt="Logo" />
        </div>
        <button className="logout-button">Logout</button>
      </header>
      <div className="login-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="farms-grid">
          {farms.map((farm) => (
            <Link
              key={farm.id}
              to={{
                pathname: farm.link,
                state: { farmName: farm.name } // Passing the selected farm's name
              }}
              className="farm-box"
            >
              {farm.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farms;
