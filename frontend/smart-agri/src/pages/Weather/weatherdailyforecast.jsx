import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faCloud, faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './weatherdailyforecast.css';

const WeatherForecast = () => {
  const hourlyForecast = [
    { time: "10:00 AM", temperature: "14°", icon: faCloud },
    { time: "01:00 PM", temperature: "15°", icon: faCloudSun },
    { time: "04:00 PM", temperature: "16°", icon: faSun },
    { time: "07:00 PM", temperature: "15°", icon: faCloud },
    { time: "10:00 PM", temperature: "13°", icon: faCloud },
  ];

  const dailyForecast = [
    { day: "Wed", temperature: "13°", icon: faCloudRain },
    { day: "Thu", temperature: "12°", icon: faCloudRain },
    { day: "Fri", temperature: "12°", icon: faCloud },
    { day: "Sat", temperature: "12°", icon: faCloud },
    { day: "Sun", temperature: "12°", icon: faCloud },
   
  ];

  return (
    <div className="weather-forecast">
      <h2>Weather Forecast</h2>

      <div className="forecast-section">
        <h3>3 Hour Step Forecast</h3>
        <div className="hourly-forecast">
          {hourlyForecast.map((forecast, index) => (
            <div key={index} className="forecast-item">
              <p>{forecast.time}</p>
              <FontAwesomeIcon icon={forecast.icon} className="weather-icon" />
              <p>{forecast.temperature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="forecast-section">
        <h3>Daily Forecast</h3>
        <div className="daily-forecast">
          {dailyForecast.map((forecast, index) => (
            <div key={index} className="forecast-item">
              <p>{forecast.day}</p>
              <FontAwesomeIcon icon={forecast.icon} className="weather-icon" />
              <p>{forecast.temperature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
