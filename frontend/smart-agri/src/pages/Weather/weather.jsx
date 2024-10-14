import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';
import './weather.css';
import SearchBar from '../../components/Searchbar/searchbar';
import Weathertemperature from './weathertemperature';
import WeatherForecast from './weatherdailyforecast';
import { getWeatherData } from '../../services/weatherService'; 
function Weather() {
  const [city, setCity] = useState('Colombo'); 
  const [weatherCondition, setWeatherCondition] = useState(''); 
  const [weatherEmoji, setWeatherEmoji] = useState(''); 
  const [datetime, setDatetime] = useState(''); 

 
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  
  const fetchWeather = async () => {
    const weatherData = await getWeatherData(city);
    if (weatherData) {
      const description = weatherData.weather[0].description; 
      const icon = weatherData.weather[0].icon; 
      setWeatherCondition(description); 
      setWeatherEmoji(`https://openweathermap.org/img/wn/${icon}@4x.png`); 
    }
  };

  
  const updateDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setDatetime(`${formattedDate} | Time - ${formattedTime}`);
  };

 
  useEffect(() => {
    fetchWeather();
    updateDateTime();
  }, [city]); 
  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1">
        <Navbar />
      </div>
      <div className="grid-item grid-item-2"></div>
      <div className="grid-item grid-item-3"></div>
      <div className="grid-item grid-item-4">
        <Sidebar />
      </div>
      <div className="Weather-dashboard grid-item">
        <div className="Weather-boardA grid-item-1">
          <SearchBar onSearch={handleSearch} />
          <div className="datetimespan">
            <span className="datetime">{datetime}</span>
          </div>
          <div className="Weatheremojibig">
            <img className="weatheremoji" src={weatherEmoji} alt="Weather Emoji" />
            <span className="weatherdata">{weatherCondition}</span>
          </div>
        </div>

        <div className="Weather-boardB grid-item-2">
          <Weathertemperature city={city} />
        </div>
        <div className="Weather-boardC grid-item-3">
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}

export default Weather;
