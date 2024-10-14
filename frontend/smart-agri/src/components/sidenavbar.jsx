import React, { useState, useEffect } from 'react';
import { FaBars, FaHome, FaCloud, FaWater, FaCogs, FaUserAlt, FaLeaf, FaUsers, FaTractor, FaBook, FaLandmark, FaTag, FaArrowAltCircleLeft } from 'react-icons/fa';
import './sidenavbar.css';
import { Link } from 'react-router-dom';

function Sidenavigationbar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open by default for larger screens
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
        setIsOpen(false); // Close sidebar by default for small screens
      } else {
        setIsSmallScreen(false);
        setIsOpen(true); // Keep sidebar open by default for large screens
      }
    };

    // Call the function initially to check screen size on page load
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <li><Link to="/"><FaHome /> Dashboard</Link></li>
          <li><Link to="/weather"><FaCloud /> Weather</Link></li>
          <li><Link to="/soil"><FaWater /> Soil & Moisture</Link></li>
          <li><Link to="/logs"><FaBook /> Logs</Link></li>
          <li><Link to="/status"><FaTag /> Status</Link></li>
          <li><Link to="/crop-management"><FaLeaf /> Crop Management</Link></li>
          <li><Link to="/land-management"><FaLandmark /> Land Management</Link></li>
          <li><Link to="/labor-management"><FaUsers /> Labor Management</Link></li>
          <li><Link to="/equipment"><FaTractor /> Equipment</Link></li>
          <li className="Account-setting"><Link to="/my-account"><FaUserAlt /> My Account</Link></li>
          <li><Link to="/settings"><FaCogs /> Settings</Link></li>
        </ul>
      </div>

      {/* Hamburger to open the sidebar when it's closed */}
      <div className="hamburger-container" onClick={toggleSidebar} style={{ display: (isSmallScreen || !isOpen) ? 'flex' : 'none' }}>
        <FaBars className="hamburger-icon" />
      </div>
    </>
  );
}

export default Sidenavigationbar;
