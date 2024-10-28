// WeatherForecast.js

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faCloud, faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { getWeatherData, getForecastData } from '../../services/weatherService'; // Adjust the path as necessary
import './weatherdailyforecast.css';

const WeatherForecast = ({ city }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  
  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeatherData(city);
      if (weatherData) {
        const { lat, lon } = weatherData.coord; // Get latitude and longitude from weather data
        const forecastData = await getForecastData(lat, lon); // Fetch forecast data using lat/lon
        if (forecastData) {
          setHourlyForecast(forecastData.list.slice(0, 5).map(item => ({
            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temperature: `${Math.round(item.main.temp)}°`,
            icon: getWeatherIcon(item.weather[0].main) // Map weather condition to FontAwesome icon
          })));

          setDailyForecast(forecastData.list.filter((_, index) => index % 8 === 0).map(item => ({
            day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
            temperature: `${Math.round(item.main.temp)}°`,
            icon: getWeatherIcon(item.weather[0].main)
          })));
        }
      }
    };

    fetchWeather();
  }, [city]);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return faSun;
      case 'Clouds':
        return faCloud;
      case 'Rain':
        return faCloudRain;
      case 'Snow':
        return faSnowflake;
      default:
        return faCloudSun; // Default icon for other conditions
    }
  };

  return (
    <div className="weather-forecast">
      <h2>Weather Forecast for {city}</h2>

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
