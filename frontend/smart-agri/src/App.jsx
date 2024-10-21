import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Dropdown from './components/DropdownComponent/Dropdown/Dropdown';
import Dashboard from './pages/dashboard';
import Navbarmobileview from './components/navbar-mobileview';
import Weather from './pages/Weather/weather';
import WeatherForecast from './pages/Weather/weatherdailyforecast';
import Soil from './pages/SoilMoisture/soil';
import Login from './pages/Login-Page/loginpage';
import Farms from './pages/Home-Page/homepage';
import LogsTable from './pages/Log-page/logpage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/homepage' element={<Farms/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/logs' element={<LogsTable/>}></Route>
        {/* <Route path='/navM' element={<Navbarmobileview/>}></Route> */}
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/weatherforecast' element={<WeatherForecast/>}></Route>
        <Route path='/soil' element={<Soil/>}></Route>
        
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
