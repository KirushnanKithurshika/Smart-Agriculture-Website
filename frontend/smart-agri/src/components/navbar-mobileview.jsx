import React from 'react'
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './navbar.css'
import LogoS from '../assets/logosa.png'
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';

function Navbarmobileview() {
  return (
    <div className='container_navbarM'>
          <Dropdown/>
        <div className='nav-bar-mobile-view'>
    <div className='logo-containerM'>
        <img className =" Logo"src={LogoS} alt="Logo" />
      </div>
    

      <div className="top-bar-rightM">
        <FaBell className="top-bar-icon" />
        <div className='user'>
        <FaUserAlt className="top-bar-iconuser" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbarmobileview