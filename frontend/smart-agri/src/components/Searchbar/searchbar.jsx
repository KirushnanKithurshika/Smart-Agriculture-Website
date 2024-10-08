import React, { useState } from 'react';
import './searchbar.css'; 
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery); // Send the searched city to the parent component
      setSearchQuery(''); // Clear input after search
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a city..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <FaSearch className="search-icon" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
