import React from 'react';
import Navbar from '../components/navbar';
import MyChart from '../components/Charts/mychart';
import './dashboard.css';
import Sidenavigationbar from '../components/sidenavbar';
import Weatherpanel from './Weather/weatherpanel';
import Navbarmobileview from '../components/navbar-mobileview';
import IrrigationWaterCapacity from '../components/irrigationgrapgh/irrigation';
import Paddy from '../assets/paddy.jpg';
import marker from '../assets/marker.png';
import { Link } from 'react-router-dom';


const markers = [
    { top: '20%', left: '30%' },
    { top: '50%', left: '50%' },
    { top: '70%', left: '20%' },
    { top: '40%', left: '80%' },
    { top: '30%', left: '70%' },
    { top: '10%', left: '70%' },
    { top: '80%', left: '60%' },
];

function Dashboard() {
    return (
        <div className='grid-container'>
            <div className='grid-item grid-item-1'>
                <Navbar />
            </div>
            <div className='grid-item grid-item-2'></div>
            <div className='grid-item grid-item-3'></div>
            <div className='grid-item grid-item-4'>
                <Sidenavigationbar />
            </div>
            <div className='grid-item grid-item-5'>
                <MyChart />
            </div>
            <div className='grid-item grid-item-6'>
                <Weatherpanel />
            </div>
            <div></div>
            <div className='irrigationgraph'>
                <IrrigationWaterCapacity />
            </div>
            <div className='landandalert' style={{ position: 'relative' }}>
                <img src={Paddy} alt="Paddy Field" className="image-style" />
                {markers.map((markerPosition, index) => (
                    <img
                        key={index}
                        src={marker} 
                        alt="Marker"
                        className="marker"
                        style={{
                            position: 'absolute',
                            top: markerPosition.top,
                            left: markerPosition.left,
                            width: '30px',  
                            height: '30px',
                        }}
                    />
                ))}
               <Link to="/landmanagement">
                <i className="fas fa-arrow-right arrow-icon"></i>
            </Link>

            </div>
        </div>
    );
}

export default Dashboard;
