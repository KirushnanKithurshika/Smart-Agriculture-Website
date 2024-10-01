import React from 'react';
import { FaHome, FaCloud, FaWater, FaCogs,  FaUserAlt, FaLeaf, FaUsers, FaTractor,FaBook, FaLandmark, FaTag } from 'react-icons/fa'; 
import './sidenavbar.css';

function Sidebar() {
  return (
    <div className="sidebar">
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
        <li className='Account-setting'><FaUserAlt /> My Account</li>
        <li><FaCogs /> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
