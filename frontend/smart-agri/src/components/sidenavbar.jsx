import React, { useState } from 'react';
import { FaBars, FaHome, FaCloud, FaWater, FaCogs, FaUserAlt, FaLeaf, FaUsers, FaTractor, FaBook, FaLandmark, FaTag, FaArrowAltCircleLeft } from 'react-icons/fa';
import './sidenavbar.css';
import { Link } from 'react-router-dom';

function Sidenavigationbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebarA ${isOpen ? 'open' : 'closed'}`}>
        {/* Arrow to minimize the sidebar */}
        {isOpen && (
          <div className="sidebar-header">
            <FaArrowAltCircleLeft className="minimize-arrow" onClick={toggleSidebar} />
          </div>
        )}
        
        <ul className="sidebar-menu">
          <li><FaHome /> Dashboard</li>
          <li><FaCloud /> Weather</li>
          <li><FaWater /> Soil & Moisture</li>
          <li><FaBook /> Logs</li>
          <li><FaTag /> Status</li>
          <li><FaLeaf /> Crop Management</li>
          <li><FaLandmark /> Land Management</li>
          <li><FaUsers /> Labor Management</li>
          <li><FaTractor /> Equipment</li>
          <li className="Account-setting"><FaUserAlt /> My Account</li>
          <li><FaCogs /> Settings</li>
        </ul>
      </div>

      {/* Hamburger to open the sidebar when it's closed */}
      {!isOpen && (
        <div className="hamburger-container" onClick={toggleSidebar}>
          <FaBars className="hamburger-icon" />
        </div>
      )}
    </>
  );
}

export default Sidenavigationbar;
