import React from 'react';
import Navbar from '../components/navbar';
import MyChart from '../components/Charts/mychart';
import './dashboard.css';
import Sidenavigationbar from '../components/sidenavbar';
import Weatherpanel from './Weather/weatherpanel';
import Navbarmobileview from '../components/navbar-mobileview';


function Dashboard() {
    return (
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
            <div className='grid-item grid-item-5'>
            <MyChart/>
            </div>
            <div className='grid-item grid-item-6'>
                <Weatherpanel/>
            </div>
            <div></div>
            <div className='irrigationgraph'></div>
            <div className='landandalert'></div>
        </div>

    );
}

export default Dashboard;
