import React, { useEffect, useState } from 'react';
import { FaBell, FaUserAlt, FaHome, FaSignOutAlt } from 'react-icons/fa';
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/slogo.png';
import LogoS from '../assets/logosa.png';
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const farmName = location.state?.farmName || 'Farm A';

  const [userName, setUserName] = useState('');
  const [notifications, setNotifications] = useState(5);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || 'Guest';
    setUserName(storedUserName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');  
    navigate('/');  
  };

  return (
    <div>
      <div className="nav-bar">
        <div className="container_navbar">
          <div className="logo-container">
            <img className="Logo" src={Logo} alt="Logo" />
          </div>
          <Dropdown />
          <div className="farmtext">{farmName}</div>
          <div className="top-bar-right">
            <Link to="/homepage" className="home-link">
              <FaHome className="top-bar-icon" />
            </Link>
            <div className="notification-container">
              <FaBell className="top-bar-icon" />
              {notifications > 0 && (
                <span className="notification-badge">{notifications}</span>
              )}
            </div>
            <div className="user">
              <span className="admin-text">{userName}</span>
              <FaUserAlt className="top-bar-iconuser" />
              <FaSignOutAlt className="top-bar-icon" onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>

      <div className="nav-barM">
        <div className="container_navbarM">
          <div className="logo-containerM grid-item-1">
            <img className="LogoM" src={LogoS} alt="Logo" />
          </div>
          <div className="dropdownM grid-item-2">
            <Dropdown />
          </div>
          <div className="top-bar-rightM grid-item-3">
            <Link to="/homepage" className="home-linkM">
              <FaHome className="top-bar-iconM" />
            </Link>
            <div className="notification-containerM">
              <FaBell className="top-bar-iconM" />
              {notifications > 0 && (
                <span className="notification-badgeM">{notifications}</span>
              )}
            </div>
            <FaUserAlt className="top-bar-iconuserM" />
            <FaSignOutAlt className="top-bar-iconlogoutM" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
