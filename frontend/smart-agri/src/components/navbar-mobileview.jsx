import React from 'react'
import { FaBell, FaUserAlt } from 'react-icons/fa';
import './navbar.css'
import LogoS from '../assets/logosa.png'
import Dropdown from '../components/DropdownComponent/Dropdown/Dropdown';

function Navbarmobileview() {
    return (

<div className='nav-barM '>
        <div className='container_navbarM'>
            <div className='logo-containerM grid-item-1'>
                <img className=" Logo" src={LogoS} alt="Logo" />
            </div>
            <div className='dropdownM grid-item-2'>
                <Dropdown />
            </div>


            <div className="top-bar-rightM grid-item-3">
            <Link to="/homepage" className="home-link">
              <FaHome className="top-bar-icon" />
            </Link>
                <FaBell className="top-bar-iconM" />
                <FaUserAlt className="top-bar-iconuserM" />
            </div>
        </div>
        </div>
    )
}

export default Navbarmobileview