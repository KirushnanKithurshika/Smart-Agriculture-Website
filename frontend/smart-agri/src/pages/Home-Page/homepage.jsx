import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import Logo from '../../assets/slogo.png';
import BackgroundImage from '../../assets/BG-login.jpg';
import { useAuth } from '../../context/authContext';

const farms = [
  { id: 'farmA', name: 'Farm A', link: '/dashboard' },
  { id: 'farmB', name: 'Farm B', link: '/dashboard' },
  { id: 'farmC', name: 'Farm C', link: '/dashboard' },
  { id: 'farmD', name: 'Farm D', link: '/dashboard' },
  { id: 'farmE', name: 'Farm E', link: '/dashboard' },
];

const Farms = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logohome">
          <img className="Logohome" src={Logo} alt="Logo" />
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div
        className="login-background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="farms-grid">
          {farms.map((farm) => (
            <Link
              key={farm.id}
              to={{
                pathname: farm.link,
              }}
              state={{ farmName: farm.name }} 
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
