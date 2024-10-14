import React from 'react'
import Navbar from '../../components/navbar'
import Sidenavigationbar from '../../components/sidenavbar'
import Moisture_panel from '../../components/Moisture/moisture_panel'

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
            < Sidenavigationbar/>
            </div>
            <div className='grid-item grid-item-moisture-panel'>
           <Moisture_panel/>
            </div>
            <div className='grid-item grid-item-6'>
               
            </div>
        </div>

    </div>
  )
}

export default Soil