import React from "react";
import Navbar from "../../components/navbar";
import Sidenavigationbar from "../../components/sidenavbar";



function Setting() {
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
         <div>
            
         </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
