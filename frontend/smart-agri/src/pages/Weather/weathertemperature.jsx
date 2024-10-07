import React, { useState } from 'react';
import './weathertemperature.css';
import PressureLogo from '../../assets/pressure.png';
import WindyLogo from '../../assets/windy.png';
import HumidityLogo from '../../assets/humidity.png';

function Weathertemperature() {
  const [unit, setUnit] = useState('C'); // state to manage current unit
  const [temperatureC, setTemperatureC] = useState(26); // temperature in Celsius
  
  // Convert temperature to Fahrenheit if needed
  const convertTemperature = (temp, unit) => {
    return unit === 'C' ? temp : (temp * 9/5) + 32;
  };

  const temperature = convertTemperature(temperatureC, unit);
  
  return (
    <div className="weather-dashboard">
      <div className="weather-left">
        <h1 className="temperature">{temperature.toFixed(1)}°{unit}</h1>
        <div className="unit-toggle">
          <span 
            className={`toggle-button ${unit === 'C' ? 'active' : ''}`} 
            onClick={() => setUnit('C')}
          >°C</span> 
          | 
          <span 
            className={`toggle-button ${unit === 'F' ? 'active' : ''}`} 
            onClick={() => setUnit('F')}
          >°F</span>
        </div>
      </div>

      <div className="temperature-range">
        <p>Low Temperature: {convertTemperature(20, unit).toFixed(1)}°{unit}</p>
        <p>High Temperature: {convertTemperature(30, unit).toFixed(1)}°{unit}</p>
      </div>

      <div className="weather-right">
        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={WindyLogo} alt="Wind icon" />
            <span>Wind speed :</span>
          </div>
          <span>20km/h</span>
        </div>

        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={HumidityLogo} alt="Humidity icon" />
            <span>Humidity :</span>
          </div>
          <span>60%</span>
        </div>

        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={PressureLogo} alt="Pressure icon" />
            <span>Pressure :</span>
          </div>
          <span>1000mb</span>
        </div>
      </div>
    </div>
  );
}

export default Weathertemperature;
