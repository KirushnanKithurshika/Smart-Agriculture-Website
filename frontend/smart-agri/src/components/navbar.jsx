
import React from 'react';
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/slogo.png';
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';
import Sidebar from './sidenavbar';
import MyChart from './Charts/mychart';


function Navbar() {
  

  return (
    <div className='nav-bar'>
    <div className='container_navbar'>
      <div className='logo-container'>
      <Sidebar/>
        <img className =" Logo"src={Logo} alt="Logo" />
      </div>
      <Dropdown/>
     

      <div className="top-bar-right">
        <FaBell className="top-bar-icon" />
        <div className='user'>
        <span className="admin-text">Admin123</span>
        <FaUserAlt className="top-bar-iconuser" />
        </div>
      </div>
     
    </div>
 

  </div>





  );
}

export default Navbar;
