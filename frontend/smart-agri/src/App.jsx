import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Dropdown from './components/DropdownComponent/Dropdown/Dropdown';
import Dashboard from './pages/dashboard';
import Navbarmobileview from './components/navbar-mobileview';
import Weather from './pages/Weather/weather';
import WeatherForecast from './pages/Weather/weatherdailyforecast';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        {/* <Route path='/navM' element={<Navbarmobileview/>}></Route> */}
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/weatherforecast' element={<WeatherForecast/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
