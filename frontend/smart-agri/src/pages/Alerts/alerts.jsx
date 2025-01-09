import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidenavigationbar from "../../components/sidenavbar";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import Alertcom from "../../components/Notification/alert";

function Alerts() {
 
  

  return (
    <div>
      <div className="cropmanagement-container">
        <div className="grid-item grid-item-1"></div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3">
          <Navbar />
        </div>
        <div className="grid-item grid-item-4">
          <Sidenavigationbar />
        </div>

        <div className="croplog-dashboard grid-item">
          
        <Alertcom/> 
        </div>
      </div>
    </div>
  );
}

export default Alerts;
