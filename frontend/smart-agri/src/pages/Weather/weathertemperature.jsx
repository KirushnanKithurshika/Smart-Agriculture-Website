import React, { useEffect, useState } from 'react';
import './weathertemperature.css';
import { getWeatherData } from '../../services/weatherService';
import PressureLogo from '../../assets/pressure.png';
import WindyLogo from '../../assets/windy.png';
import HumidityLogo from '../../assets/humidity.png';

function Weathertemperature({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('C'); // Celsius by default

  useEffect(() => {
    // Fetch weather data for the selected city
    const fetchWeather = async () => {
      const data = await getWeatherData(city);
      if (data) {
        setWeatherData(data);
      }
    };

    fetchWeather();
  }, [city]); // Update when `city` changes

  const convertTemperature = (temp, unit) => {
    return unit === 'C' ? temp : (temp * 9 / 5) + 32;
  };

  // Get data from API response
  const temperatureC = weatherData?.main?.temp || 0;
  const temperature = convertTemperature(temperatureC, unit);
  const lowTempC = weatherData?.main?.temp_min || 0;
  const highTempC = weatherData?.main?.temp_max || 0;
  const windSpeed = weatherData?.wind?.speed || 0;
  const humidity = weatherData?.main?.humidity || 0;
  const pressure = weatherData?.main?.pressure || 0;

  return (
    <div className="weather-dashboard">
      <div className="weather-left">
        <span className='Location'>{weatherData?.name || 'Location'}</span>
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
        <p>Low Temp: {convertTemperature(lowTempC, unit).toFixed(1)}°{unit}</p>
        <p>High Temp: {convertTemperature(highTempC, unit).toFixed(1)}°{unit}</p>
      </div>

      <div className="weather-right">
        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={WindyLogo} alt="Wind icon" />
            <span>Wind speed :</span>
          </div>
          <span>{windSpeed} km/h</span>
        </div>

        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={HumidityLogo} alt="Humidity icon" />
            <span>Humidity :</span>
          </div>
          <span>{humidity}%</span>
        </div>

        <div className="weather-info">
          <div className="icon-text">
            <img className="wind-humidity-pressure" src={PressureLogo} alt="Pressure icon" />
            <span>Pressure :</span>
          </div>
          <span>{pressure} mb</span>
        </div>
      </div>
    </div>
  );
}

export default Weathertemperature;
