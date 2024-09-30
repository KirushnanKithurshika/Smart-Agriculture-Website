import React from 'react';
import { FaHome, FaCloud, FaWater, FaCogs, FaBell, FaUserAlt, FaLeaf, FaUsers, FaTractor } from 'react-icons/fa'; 
import './sidenavbar.css';

function Sidebar() {
  return (
    <div className="sidebar">
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
    </div>
  );
}

export default Sidebar;
