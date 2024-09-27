
import React from 'react';
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './navbar.css';
import Logo from '../assets/slogo.png';


function Navbar() {
  return (
    <div className='container_navbar'>
      <div className='logo-container'>
        <img src={Logo} alt="Logo" />
      </div>

      <div className="division-selector">
        <select className="division-selector">
          <option value="A">Division A</option>
          <option value="B">Division B</option>
          <option value="C">Division C</option>
        </select>
      </div>

      <div className="top-bar-right">
        <FaBell className="top-bar-icon" />
        <div className='user'>
        <span className="admin-text">Admin123</span>
        <FaUserAlt className="top-bar-iconuser" />
        </div>
      </div>
    </div>






  );
}

export default Navbar;
