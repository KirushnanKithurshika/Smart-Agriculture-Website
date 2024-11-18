import React from 'react'
import Navbar from '../../components/navbar'
import Sidenavigationbar from '../../components/sidenavbar'
import Moisture_panel from '../../components/Moisture/moisture_panel'
import './soil.css';
import PH from '../../assets/ph.png';
import PhProgressBar  from '../../components/PHchart/phchart'
import MoistureGraph from '../../components/Moisturepichart/moisturepichart';

function Soil() {
  return (
    <div>
      <div className='grid-container'>
        <div className='grid-item grid-item-1'>
          <Navbar />

        </div>
        <div className='grid-item grid-item-2'>



        </div>
        <div className='grid-item grid-item-3'>
        </div>
        <div className='grid-item grid-item-4'>
          < Sidenavigationbar />
        </div>
        <div className='grid-item grid-item-moisture-panel'>
          <Moisture_panel />
          <div> <MoistureGraph/></div>
        </div>
       
        <div className='grid-item grid-item-ph'>
          <div className='ph-panel'>
            <div class="column1">
              <PhProgressBar />
            </div>
            <div class="column2" style={{
        backgroundImage: `url(${PH})`,
        backgroundSize: 'cover',   // Ensures the image covers the entire div
        backgroundPosition: 'center',  // Centers the image in the div
        width: '90%',             // Adjust the width and height as needed
        height: '300px',
      }}
    >
              
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Soil