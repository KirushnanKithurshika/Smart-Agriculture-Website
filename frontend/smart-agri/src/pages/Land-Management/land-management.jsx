import React, { useState } from 'react';
import './land-management.css';
import Navbar from '../../components/navbar';
import Sidenavigationbar from '../../components/sidenavbar';
import CropDistributionChart from '../../components/Cropdistributiongraph/Cropdistribution';
import CropCostChart from '../../components/Costgraph/costgraph';
import Paddyarea from '../../assets/paddy.jpg';
import marker from '../../assets/marker.png';
import Jobs from './jobs/jobs';
import Cost from './cost/cost';
import { FaSearchPlus, FaPrint, FaInfoCircle } from 'react-icons/fa';
import FarmingComponent from '../../components/mapcomponent/slideA';

const markers = [
    { top: '120%', left: '30%', label: 'Rice Crop (4 weeks)' },
    { top: '150%', left: '50%', label: 'Wheat Crop (6 weeks)' },
    { top: '170%', left: '70%', label: 'Corn Crop (3 weeks)' },
    { top: '150%', left: '80%', label: 'Barley Crop (5 weeks)' },
    { top: '140%', left: '70%', label: 'Soybean Crop (2 weeks)' },
    { top: '130%', left: '70%', label: 'Cotton Crop (8 weeks)' },
    { top: '120%', left: '60%', label: 'Rice Crop (1 week)' },
    { top: '210%', left: '40%', label: 'White Rice Crop (3 weeks)' },
    { top: '200%', left: '65%', label: 'Potato Crop (3 weeks)' },
    { top: '190%', left: '35%', label: 'Potato Crop (7 weeks)' },
];

function LandManagement() {
    const [isFarmVisible, setIsFarmVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('crops');
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleMouseEnter = (index) => {
        setHoveredMarker(index);
    };

    const handleMouseLeave = () => {
        setHoveredMarker(null);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredMarkers = markers.filter(marker =>
        marker.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleMoreInfoClick = () => {
        setIsFarmVisible(!isFarmVisible);
    };

    return (
        <div>
            <div className="land-container">
                <div className="grid-item grid-item-1">
                    <Navbar />
                </div>
                <div className="grid-item grid-item-2"></div>
                <div className="grid-item grid-item-3"></div>
                <div className="grid-item grid-item-4">
                    <Sidenavigationbar />
                </div>

                <div className="land-dashboard grid-item">
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

                    {activeButton === 'crops' && (
                        <div className="land-management-container">
                            <div className="field">
                                <div className="card fields">
                                    <h4>Fields</h4>
                                    <p>102</p>
                                </div>
                                <div className="card job-active">
                                    <h4>Job Active</h4>
                                    <p>102</p>
                                </div>
                                <div className="card jobs-due">
                                    <h4>Jobs Due</h4>
                                    <p>20</p>
                                </div>
                                <div className="card jobs-completed">
                                    <h4>Jobs Completed</h4>
                                    <p>100</p>
                                </div>
                            </div>
                            <div className="field-percentage">
                                <div className="crop-distribution-graph">
                                    <CropDistributionChart />
                                </div>
                                <div className="cost-graph">
                                    <CropCostChart />
                                </div>
                            </div>
                            <div className="paddy-area-container">
                                <img src={Paddyarea} alt="Paddy Field" className="paddy-area" />
                                <div className="top-left-rectangle">
                                    <div className="search-containerL">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="search-barL"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                        <i className="fas fa-search search-iconL"></i>
                                    </div>
                                </div>

                                <div className="top-right-rectangle">
                                    <div className="icon zoom-icon">
                                        <FaSearchPlus />
                                    </div>

                                    <div className="icon print-icon">
                                        <FaPrint />
                                    </div>

                                    <div className="icon more-details-icon" onClick={handleMoreInfoClick}>
                                        <FaInfoCircle />
                                    </div>
                                </div>
                                {isFarmVisible && (
                                    <div className="farm">
                                        <FarmingComponent />
                                    </div>
                                )}

                                {markers.map((markerPosition, index) => (
                                    <div key={index}>
                                        <img
                                            src={marker}
                                            alt={`Marker ${index + 1}`}
                                            className="marker"
                                            style={{
                                                position: 'absolute',
                                                top: markerPosition.top,
                                                left: markerPosition.left,
                                            }}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        />
                                        {(hoveredMarker === index || filteredMarkers.includes(markerPosition)) && (
                                            <div
                                                className="tooltip"
                                                style={{
                                                    position: 'absolute',
                                                    top: `calc(${markerPosition.top} - 20px)`,
                                                    left: `calc(${markerPosition.left} + 10px)`,
                                                }}
                                            >
                                                {markerPosition.label}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeButton === 'taskManagement' && (
                        <div className="jobs-container">
                            <Jobs />
                        </div>
                    )}

                    {activeButton === 'costAnalysis' && (
                        <div className="cost-container">
                            <Cost />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LandManagement;
