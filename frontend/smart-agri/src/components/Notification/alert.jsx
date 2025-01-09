import React from 'react';
import './alert.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Alertcom = () => {
  const alerts = [
    { 
      message: 'Soil moisture level is critically low. Please irrigate the fields to prevent crop stress.',
      date: '2025-01-08',
      time: '08:30 AM'
    },
    { 
      message: 'Nitrogen levels in the soil are below the required threshold. Consider applying fertilizers.',
      date: '2025-01-08',
      time: '09:00 AM'
    },
    { 
      message: 'The temperature is too high for optimal crop growth. Take cooling measures if possible.',
      date: '2025-01-08',
      time: '09:30 AM'
    },
    { 
      message: 'The pH level of the soil is too acidic. Add lime to balance the pH level.',
      date: '2025-01-08',
      time: '10:00 AM'
    },
    { 
      message: 'Potassium levels in the soil are insufficient. Consider adding potassium-rich fertilizers.',
      date: '2025-01-08',
      time: '10:30 AM'
    },
    { 
      message: 'Heavy rainfall is expected in the next 24 hours. Ensure proper drainage to prevent waterlogging.',
      date: '2025-01-08',
      time: '11:00 AM'
    },
    { 
      message: 'Phosphorus levels are critically low. Apply phosphorus-based fertilizers for better crop health.',
      date: '2025-01-08',
      time: '11:30 AM'
    },
    { 
      message: 'High wind speeds detected. Protect crops with barriers or windbreaks.',
      date: '2025-01-08',
      time: '12:00 PM'
    },
    { 
      message: 'Soil salinity levels are increasing. Take measures to reduce salt concentration.',
      date: '2025-01-08',
      time: '12:30 PM'
    },
    { 
      message: 'Pest activity detected in the fields. Apply pest control measures immediately.',
      date: '2025-01-08',
      time: '01:00 PM'
    },
    { 
      message: 'Humidity levels are too low for optimal crop growth. Consider increasing irrigation.',
      date: '2025-01-08',
      time: '01:30 PM'
    },
    { 
      message: 'A potential frost event is forecasted. Protect your crops from freezing conditions.',
      date: '2025-01-08',
      time: '02:00 PM'
    },
    { 
      message: 'Water tank levels are critically low. Refill the tank to ensure uninterrupted irrigation.',
      date: '2025-01-08',
      time: '02:30 PM'
    },
    { 
      message: 'Irrigation system malfunction detected. Inspect the system immediately.',
      date: '2025-01-08',
      time: '03:00 PM'
    },
    { 
      message: 'Sunlight levels are insufficient for photosynthesis. Monitor plant health closely.',
      date: '2025-01-08',
      time: '03:30 PM'
    }
  ];

  return (
    <div className="alerts-container">
      <h3 className='alerthead'>Alerts</h3>
      <div className="alerts-box">
        {alerts.map((alert, index) => (
          <div key={index} className="alert-item">
            <div className="alert-number">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <div className="alert-text">{alert.message}</div>
            <div className="alert-time">
              <strong>Date:</strong> {alert.date} <strong>Time:</strong> {alert.time}
            </div>
            <button className="alert-close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alertcom;
