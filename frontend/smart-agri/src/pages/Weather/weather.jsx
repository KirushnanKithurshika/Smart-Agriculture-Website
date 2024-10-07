import React from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';
import './weather.css';
import SearchBar from '../../components/Searchbar/searchbar';
import WeatherEmojiBig from '../../assets/Cloudy.png';
import Weathertemperature from './weathertemperature';
import WeatherForecast from './weatherdailyforecast';


function Weather() {
    return (
        <div className='grid-container'>
            <div className='grid-item grid-item-1'>
                <Navbar />

            </div>
            <div className='grid-item grid-item-2'>



            </div>
            <div className='grid-item grid-item-3'>
            </div>
            <div className='grid-item grid-item-4'>
                <Sidebar />
            </div>
            <div className='Weather-dashboard grid-item'>
                <div className='Weather-boardA grid-item-1'>
                    <SearchBar />
                    <div className='datetimespan'><span className='datetime'>Thursday,3rd October,2024 | Time-3:33PM</span>
                    </div>
                    <div className='Weatheremojibig'>
                    <img className="weatheremoji " src={WeatherEmojiBig }  />
                    <span className='weatherdata'>Cloudy</span>
                   
                   </div>
                </div>

                <div className='Weather-boardB grid-item-2'>
                    <Weathertemperature/>
                </div>
                <div className='Weather-boardC grid-item-3'>
                    < WeatherForecast/>
                </div>

            </div>



        </div>

    );
}

export default Weather;
