import React from 'react';
import './searchbar.css'; 
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search for a city........"
            />
            <FaSearch className="search-icon" />
        </div>
    );
};

export default SearchBar;
