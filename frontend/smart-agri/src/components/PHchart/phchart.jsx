import React, { useState, useEffect } from 'react';
import './phchart.css';

const PhProgressBar = () => {
  const [phValue, setPhValue] = useState(null);

  const fetchPhValue = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/logs/latest');
      if (!response.ok) {
        throw new Error('Failed to fetch pH value');
      }
      const data = await response.json();
      setPhValue(data.PH || 0);
    } catch (error) {
      console.error('Error fetching pH value:', error);
    }
  };

  useEffect(() => {
    fetchPhValue();
  }, []);

  if (phValue === null) {
    return <div>Loading...</div>;
  }
  let alertMessage = '';
  let isNeutral = false;
  if (phValue >= 6 && phValue <= 8) {
    alertMessage = 'PH is in the 6 to 8 range. So it is neutral, no harm for plants.';
    isNeutral = true;
  } else if (phValue < 6) {
    alertMessage = 'PH is below 6. The soil is too acidic, which may harm plants.';
  } else {
    alertMessage = 'PH is above 8. The soil is too alkaline, which may harm plants.';
  }

  return (
    <div className="ph-maincontainer">
      <div className="ph-container">
        <span className="ph-label">PH</span>
        <div className="ph-bar">
          <div className="ph-fill" style={{ width: `${phValue * 10}%` }}></div>
        </div>
        <span className="ph-value">{phValue}</span>
      </div>

      
      <div 
        className="alert-box" 
        style={{
          backgroundColor: isNeutral ? '#e0ffd4' : '#ffd4d4', 
          color: isNeutral ? 'black' : 'red'
        }}
      >
        <span 
          className="alert-indicator" 
          style={{
            backgroundColor: isNeutral ? 'green' : 'red'  
          }}
        ></span>
        {alertMessage}
      </div>
    </div>
  );
};

export default PhProgressBar;
