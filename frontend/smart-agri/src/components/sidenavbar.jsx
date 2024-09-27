

import React from 'react';
import { FaHome, FaCloud, FaWater, FaCogs, FaBell, FaUserAlt, FaLeaf, FaUsers, FaTractor } from 'react-icons/fa'; 
import './sidenavbar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <img src="/logo.png" alt="Smart Agriculture" /> 
          <h2>Smart Agriculture</h2>
        </div>
        
      </div>
      <ul className="sidebar-menu">
        <li><FaHome /> Dashboard</li>
        <li><FaCloud /> Weather</li>
        <li><FaWater /> Soil & Moisture</li>
        <li><FaLeaf /> Crop Management</li>
        <li><FaCogs /> Land Management</li>
        <li><FaUsers /> Labor Management</li>
        <li><FaTractor /> Equipment</li>
        <li><FaUserAlt /> My Account</li>
        <li><FaCogs /> Settings</li>
      </ul>
      <div className="sidebar-footer">
        <FaBell /> <span>Admin123</span>
      </div>
    </div>
  );
}

export default Sidebar;
