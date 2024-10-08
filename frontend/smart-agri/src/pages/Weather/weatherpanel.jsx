import React, { useState } from 'react';
import './weatherpanel.css';
import SearchBar from '../../components/Searchbar/searchbar';
import Weathertemperature from './weathertemperature';

function Weatherpanel() {
  const [city, setCity] = useState('London'); // Default city is London

  // Function to update city when user searches
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
