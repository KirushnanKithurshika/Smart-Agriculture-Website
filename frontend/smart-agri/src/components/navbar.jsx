
import React from 'react';
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/slogo.png';
import LogoS from '../assets/logosa.png';
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';

import MyChart from './Charts/mychart';


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
                <FaBell className="top-bar-iconM" />
                <FaUserAlt className="top-bar-iconuserM" />
            </div>
        </div>
        </div>
    </div>



  );
}

export default Navbar;
