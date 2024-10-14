import React, { useState } from 'react';
import './weatherpanel.css';
import SearchBar from '../../components/Searchbar/searchbar';
import Weathertemperature from './weathertemperature';

function Weatherpanel() {
  const [city, setCity] = useState('Colombo'); 

  
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className='weather-panel-area'>
      <div className='weather-panel-contentA'>
        <SearchBar onSearch={handleSearch} />
        <Weathertemperature city={city} />
      </div>
    </div>
  );
}

export default Weatherpanel;
