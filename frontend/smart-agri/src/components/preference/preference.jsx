import React, { useState } from "react";
import "./preference.css";

import Dropdownlan from "../DropdownComponent/Dropdownlan/dropdownlan";
import customImagesystem from '../../assets/system.png';
import customImagelight from '../../assets/light.png';
import customImagedark from '../../assets/dark.png';

const Preference = () => {
  const [theme, setTheme] = useState("system");

  return (
    <div className="Preference-container">
    <div>
    <span className="Appearancehead"> Appearance</span>
    </div>
      
      <div className="setting">
        <div><span className="headlabel">Language</span>
        <p className="sentence">Select the language of the application</p></div>
        <div>  <Dropdownlan/></div>
        
      
        
      </div>
      <div className="settingtheme">
        <div>
        <span className="headlabel">Interface theme</span>
        <p className="sentence">Select the theme of the application</p>
        </div>
       
        <div className="themes">
            <div>
          <div
            className={`theme-option ${theme === "system" ? "selected" : ""}`}
            onClick={() => setTheme("system")}
          >
             <img src={customImagesystem} alt="System Theme Preview" className="theme-preview" />
          
          </div>
          <p className="sentencet">System</p>
          </div>
          <div>
          <div
            className={`theme-option ${theme === "light" ? "selected" : ""}`}
            onClick={() => setTheme("light")}
          >
           <img src={customImagelight} alt="System Theme Preview" className="theme-preview" />
           
          </div>
          <p className="sentencet">Light</p>
          </div>
          <div>
          <div
            className={`theme-option ${theme === "dark" ? "selected" : ""}`}
            onClick={() => setTheme("dark")}
          >
            <img src={customImagedark} alt="System Theme Preview" className="theme-preview" />
           
          </div>
          <p className="sentencet">Dark</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Preference;
