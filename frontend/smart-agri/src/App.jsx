import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Dropdown from './components/DropdownComponent/Dropdown/dropdown';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        </Route>
        <Route path='/dropdown' element={<Dropdown/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
