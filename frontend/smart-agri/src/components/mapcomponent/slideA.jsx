import React, { useState } from 'react';
import './slideA.css';
import Corn from '../../assets/corn.png';
import Rice from '../../assets/rice.png';
import Potato from '../../assets/potato.png';
import Beetroot from '../../assets/beetroot.png';
import Redrice from '../../assets/redrice.png';
import Sugarcane from '../../assets/sugar-cane.png';
import FarmingComponentSlideB from './slideB';

export const activities = [
    { id: 1, name: 'Corn', action: 'Plowing', icon: Corn },
    { id: 2, name: 'Rice', action: 'Seeding', icon: Rice },
    { id: 3, name: 'Potato', action: 'Weeding', icon: Potato },
    { id: 4, name: 'Beetroot', action: 'Weeding', icon: Beetroot },
    { id: 5, name: 'Redrice', action: 'Seeding', icon: Redrice },
    { id: 6, name: 'Sugarcane', action: 'Fertilizing', icon: Sugarcane },
];

const FarmingComponent = () => {
    const [selectedActivity, setSelectedActivity] = useState(null); // Track the selected activity

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity); // Set the selected activity
    };

    const handleBackClick = () => {
        setSelectedActivity(null); // Go back to the main component
    };

    if (selectedActivity) {
        // Render the SlideB component if an activity is selected
        return <FarmingComponentSlideB activity={selectedActivity} onBackClick={handleBackClick} />;
    }
    

    return (
        <div className="farming-container">
            <div className="header">
                <span className="division-text">Division No.</span>
                <span className="division-id">#A</span>
                <button className="close-button">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="activity-list">
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="activity-item"
                        onClick={() => handleActivityClick(activity)}
                    >
                        <div className="iconsslideA">
                            <img src={activity.icon} alt={activity.name} className="icon-imageM" />
                        </div>
                        <div className="details">
                            <span className="name">{activity.name}</span>
                            <span className="action">{activity.action}</span>
                        </div>
                        <div className="arrow">›</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FarmingComponent;
