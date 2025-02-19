// In Sidenavigationbar.js
import React, { useState, useEffect } from 'react';
import { FaBars, FaHome, FaCloud, FaWater, FaAdjust, FaUserAlt, FaLeaf, FaUsers, FaTractor, FaBook, FaLandmark, FaTag, FaArrowAltCircleLeft } from 'react-icons/fa';
import './sidenavbar.css';
import { Link, useLocation } from 'react-router-dom';

function Sidenavigationbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation(); 

 
 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
        setIsOpen(false);
      } else {
        setIsSmallScreen(false);
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`sidebarA ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <div className="sidebar-header">
            <FaArrowAltCircleLeft className="minimize-arrow" onClick={toggleSidebar} />
          </div>
        )}
        <ul className="sidebar-menu">
         
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard"><FaHome /> Dashboard</Link>
          </li>
          <li className={location.pathname === '/weather' ? 'active' : ''}>
            <Link to="/weather"><FaCloud /> Weather</Link>
          </li>
          <li className={location.pathname === '/soil' ? 'active' : ''}>
            <Link to="/soil"><FaWater /> Soil & Moisture</Link>
          </li>
          <li className={location.pathname === '/logs' ? 'active' : ''}>
            <Link to="/logs"><FaBook /> Logs</Link>
          </li>
          <li className={location.pathname === '/cropmanagement' ? 'active' : ''}>
            <Link to="/cropmanagement"><FaLeaf /> Crop Management</Link>
          </li>
          <li className={location.pathname === '/landmanagement' ? 'active' : ''}>
            <Link to="/landmanagement"><FaLandmark /> Land Management</Link>
          </li>
          <li className={location.pathname === '/employee' ? 'active' : ''}>
            <Link to="/employee"><FaUsers /> Labor Management</Link>
          </li>
          <li className={location.pathname === '/equipment' ? 'active' : ''}>
            <Link to="/equipment"><FaTractor /> Equipment</Link>
          </li>
          <li className={location.pathname === '/myaccount' ? 'active' : ''}>
            <Link to="/myaccount"><FaUserAlt /> My Account</Link>
          </li>
          <li className={location.pathname === '/setting' ? 'active' : ''}>
            <Link to="/setting"><FaAdjust /> Preferences</Link>
          </li>
        </ul>
      </div>

      <div className="hamburger-container" onClick={toggleSidebar} style={{ display: (isSmallScreen || !isOpen) ? 'flex' : 'none' }}>
        <FaBars className="hamburger-icon" />
      </div>
    </>
  );
}

export default Sidenavigationbar;
