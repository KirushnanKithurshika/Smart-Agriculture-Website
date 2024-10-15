
import React from 'react';
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './loginpage-navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/slogo.png';
import LogoS from '../assets/logosa.png';



function LoginNavbar() {


  return (
    <div>
      <div className='nav-barL'>
        <div className='container_navbarL'>
          <div className='logo-containerL'>
            <img className=" Logo" src={Logo} alt="Logo" />
          </div>
         


          <div className="top-bar-rightL">
            
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

export default LoginNavbar;
