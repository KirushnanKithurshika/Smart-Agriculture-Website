import React from 'react'
import Navbar from '../../components/navbar'
import Sidenavigationbar from '../../components/sidenavbar'
import Moisture_panel from '../../components/Moisture/moisture_panel'
import './soil.css';
import PH from '../../assets/ph.png';
import PhProgressBar from '../../components/PHchart/phchart'
import NitrogenStatus from '../../components/Nitrogenpichart/nitrogen'
import PhosphorusStatus from '../../components/Phosphoruspichart/phosphorus';
import PotassiumStatus from '../../components/Postasiumpichart/potassium';

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

        </div>

        <div className='grid-item grid-item-ph'>
          <div className='ph-panel'>
            <div class="column1">
              <PhProgressBar />
            </div>
            <div class="column2" style={{
              backgroundImage: `url(${PH})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '280px 200px',   // Ensures the image covers the entire div
              backgroundPosition: 'center',  // Centers the image in the div
              width: '90%',             // Adjust the width and height as needed
              
            }}
            >

            </div>
          </div>

        </div>

        <div>
       
        </div>

        <div className='status'>
        <NitrogenStatus/>
        <PhosphorusStatus />
        <PotassiumStatus/>
       
        </div>
        <div> </div>
      </div>

    </div>
  )
}

export default Soil