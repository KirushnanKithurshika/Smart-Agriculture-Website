import React from 'react';
import { FaBell, FaUserAlt, FaHome } from 'react-icons/fa'; // Import FaHome
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/slogo.png';
import LogoS from '../assets/logosa.png';
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';

function Navbar() {
  return (
    <div>
      <div className='nav-bar'>
        <div className='container_navbar'>
          <div className='logo-container'>
            <img className=" Logo" src={Logo} alt="Logo" />
          </div>
          <Dropdown />

          <div className="top-bar-right">
            {/* Add Home icon with link */}
            <Link to="/homepage" className="home-link">
              <FaHome className="top-bar-icon" />
            </Link>
            <FaBell className="top-bar-icon" />
            <div className='user'>
              <span className="admin-text">Admin123</span>
              <FaUserAlt className="top-bar-iconuser" />
            </div>
          </div>
        </div>
      </div>

      <div className='nav-barM '>
        <div className='container_navbarM'>
          <div className='logo-containerM grid-item-1'>
            <img className=" LogoM" src={LogoS} alt="Logo" />
          </div>
          <div className='dropdownM grid-item-2'>
            <Dropdown />
          </div>

          <div className="top-bar-rightM grid-item-3">
            {/* Add Home icon for mobile as well */}
            <Link to="/homepage" className="home-linkM">
              <FaHome className="top-bar-iconM" />
            </Link>
            <FaBell className="top-bar-iconM" />
            <FaUserAlt className="top-bar-iconuserM" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
