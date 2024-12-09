import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './cropmanagement.css';
import Navbar from '../../components/navbar';
import Sidenavigationbar from '../../components/sidenavbar';
import Cropdetails from './cropdetails';

function Cropmanagement() {
  const [activeButton, setActiveButton] = useState('crops');
  const [showCropDetails, setShowCropDetails] = useState(false);


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'taskManagement') {
      setShowCropDetails(true);
    } else {
      setShowCropDetails(false); 
    }
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
           
            <button
              className={`nav-button ${activeButton === 'crops' ? 'active-button' : ''}`}
              onClick={() => handleButtonClick('crops')}
            >
              Crops
            </button>

        
            <button
              className={`nav-button ${activeButton === 'taskManagement' ? 'active-button' : ''}`}
              onClick={() => handleButtonClick('taskManagement')}
            >
              Task Management
            </button>

            </div>

          <div className="crop-images-container">
            
          {showCropDetails ? (
              <Cropdetails />
            ) : (
              <div className="crop-images">
                
              </div>
            )}
            </div>
        </div>
      </div>
    </div>
  
  );
}

export default Cropmanagement;
