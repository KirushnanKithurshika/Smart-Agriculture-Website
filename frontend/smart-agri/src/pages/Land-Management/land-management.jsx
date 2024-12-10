import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './land-management.css';
import Navbar from '../../components/navbar';
import Sidenavigationbar from '../../components/sidenavbar';
import CropDistributionChart from '../../components/Cropdistributiongraph/Cropdistribution';
import CropCostChart from '../../components/Costgraph/costgraph';
import Paddyarea from '../../assets/paddy.jpg';
import marker from '../../assets/marker.png';

const markers = [
    { top: '120%', left: '30%' },
    { top: '150%', left: '50%' },
    { top: '170%', left: '70%' },
    { top: '150%', left: '80%' },
    { top: '140%', left: '70%' },
    { top: '130%', left: '70%' },
    { top: '120%', left: '60%' },
];

function LandManagement() {
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
            <div className='land-container'>
                <div className='grid-item grid-item-1'>
                    <Navbar />
                </div>
                <div className='grid-item grid-item-2'></div>
                <div className='grid-item grid-item-3'></div>
                <div className='grid-item grid-item-4'>
                    <Sidenavigationbar />
                </div>

                <div className='land-dashboard grid-item'>
                    <div className="button-container">
                        <button
                            className={`nav-button ${activeButton === 'crops' ? 'active-button' : ''}`}
                            onClick={() => handleButtonClick('crops')}
                        >
                            Fields
                        </button>
                        <button
                            className={`nav-button ${activeButton === 'taskManagement' ? 'active-button' : ''}`}
                            onClick={() => handleButtonClick('taskManagement')}
                        >
                            Jobs
                        </button>
                        <button
                            className={`nav-button ${activeButton === 'costAnalysis' ? 'active-button' : ''}`}
                            onClick={() => handleButtonClick('costAnalysis')}
                        >
                            Cost Analysis
                        </button>
                    </div>

                    <div className="land-management-container">
                        <div className='field'>
                            <div className='card fields'>
                                <h4>Fields</h4>
                                <p>102</p>
                            </div>
                            <div className='card job-active'>
                                <h4>Job Active</h4>
                                <p>102</p>
                            </div>
                            <div className='card jobs-due'>
                                <h4>Jobs Due</h4>
                                <p>20</p>
                            </div>
                            <div className='card jobs-completed'>
                                <h4>Jobs Completed</h4>
                                <p>100</p>
                            </div>
                        </div>
                        <div className='field-percentage'>
                            <div className='crop-distribution-graph'><CropDistributionChart /></div>
                            <div className='cost-graph'><CropCostChart /></div>
                        </div>
                        <div className='paddy-area-container'>
                            <img src={Paddyarea} alt="Paddy Field" className="paddy-area" />
                            {markers.map((markerPosition, index) => (
                                <img
                                    key={index}
                                    src={marker}
                                    alt={`Marker ${index + 1}`}
                                    className="marker"
                                    style={{
                                        position: 'absolute',
                                        top: markerPosition.top,
                                        left: markerPosition.left,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandManagement;
