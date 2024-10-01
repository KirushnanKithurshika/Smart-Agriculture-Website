import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Dropdown from './components/DropdownComponent/Dropdown/Dropdown';
import Dashboard from './pages/dashboard';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
