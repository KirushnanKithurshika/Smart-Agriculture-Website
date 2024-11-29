import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // We will keep using Link instead of NavLink
import './cropmanagement.css';
import Navbar from '../../components/navbar';
import Sidenavigationbar from '../../components/sidenavbar';
import Whiterice from '../../assets/whiterice.jpg';
import Redrice from '../../assets/redrice.jpg';
import Blackrice from '../../assets/blackrice.jpg';
import Chickpea from '../../assets/chickpea.jpg';
import Ladysfinger from '../../assets/ladysfinger.jpg';
import Peanut from '../../assets/peanut.jpg';
import Potato from '../../assets/potato.jpg';
import Tomato from '../../assets/tomato.jpg';
import Cropdetails from './cropdetails';

function Cropmanagement() {
  // Set the initial active state (Crops button is active by default)
  const [activeButton, setActiveButton] = useState('crops');

  // Handle button click to update the active button state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className='cropmanagement-container'>
        <div className='grid-item grid-item-1'>
          <Navbar />
        </div>
        <div className='grid-item grid-item-2'></div>
        <div className='grid-item grid-item-3'></div>
        <div className='grid-item grid-item-4'>
          <Sidenavigationbar />
        </div>

        <div className='croplog-dashboard grid-item'>
          <div className="button-container">
            {/* Crops Button */}
            <Link to="/cropmanagement">
              <button
                className={`nav-button ${activeButton === 'crops' ? 'active-button' : ''}`}
                onClick={() => handleButtonClick('crops')}
              >
                Crops
              </button>
            </Link>

            {/* Task Management Button */}
            <Link to="/croptask">
              <button
                className={`nav-button ${activeButton === 'taskManagement' ? 'active-button' : ''}`}
                onClick={() => handleButtonClick('taskManagement')}
              >
                Task Management
              </button>
            </Link>
          </div>

          <div className="crop-images-container">
            <div className="crop-image">
              <img src={Whiterice} alt="White Rice Crop" />
              <p>White Rice Crop</p>
            </div>
            <div className="crop-image">
              <img src={Blackrice} alt="Black Rice Crop" />
              <p>Black Rice Crop</p>
            </div>
            <div className="crop-image">
              <img src={Redrice} alt="Red Rice Crop" />
              <p>Red Rice Crop</p>
            </div>
            <div className="crop-image">
              <img src={Chickpea} alt="Chickpea Crop" />
              <p>Chickpea Crop</p>
            </div>
            <div className="crop-image">
              <img src={Ladysfinger} alt="Lady's Finger" />
              <p>Lady's Finger</p>
            </div>
            <div className="crop-image">
              <img src={Tomato} alt="Tomato Crop" />
              <p>Tomato</p>
            </div>
            <div className="crop-image">
              <img src={Potato} alt="Potato Crop" />
              <p>Potato</p>
            </div>
            <div className="crop-image">
              <img src={Peanut} alt="Peanut Crop" />
              <p>Peanuts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cropmanagement;
