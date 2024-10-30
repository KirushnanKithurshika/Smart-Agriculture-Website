import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';



function Employee() {
  
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
      <div className="employee-dashboard grid-item">
        <div className="employee-boardA grid-item-1">
          
         
        </div>

        <div className="employee-boardB grid-item-2">
         
        </div>
        <div className="employee-boardC grid-item-3">
         
        </div>
      </div>
    </div>
  );
}

export default Employee;
