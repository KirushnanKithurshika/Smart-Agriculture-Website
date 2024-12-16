import React from 'react';
import './slideB.css';

const FarmingComponentSlideB = ({ activity, onBackClick, onClose }) => {
    if (!activity) {
        return <div>No activity found!</div>;
    }

    return (
        <div className="farmingB-container">
            <div className="headerB">
                <div className="back-arrow" onClick={onBackClick}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div>
                    <span className="division-text">Division No.</span>
                    <span className="division-id">#A</span>
                </div>
                <div>
                  
                   
                </div>
            </div>
            <div className="activityB-details">
                <div className="icon-container">
                    <img src={activity.icon} alt={activity.name} className="icon-imageM" />
                </div>
                <div className="logoandactivity">
                    <h2 className="activity">{activity.name}</h2>
                    <span className="activeA">Active</span>
                </div>
            </div>
            <div className="SlideBgridC">
                <div className="SlideBgridCA">
                    <div className="SlideBgridCAA">
                        <p className="actionA">{activity.action}</p>
                        <div className="circleandprogress">
                            <div className="circle"></div>
                            <span className="progress">In Progress</span>
                        </div>
                    </div>
                    <div className="SlideBgridCAB">
                        <div className="date">
                            <span>End date: 20.12.2024</span>
                        </div>
                    </div>
                </div>

                <div className="SlideBgridCB">
                    <div className="SlideBgridCBA">
                        <div className="count">12</div>
                        <span className="description">Workers</span>
                    </div>
                    <div className="SlideBgridCBA">
                        <div className="count">5</div>
                        <span className="description">Vehicles</span>
                    </div>
                    <div className="SlideBgridCBB">
                        <button className="add-taskmap-button">Add Task+</button>
                    </div>
                </div>
            </div>

            <div className="SlideBgridD">
                <div className="SlideBgridDA">
                    <div className="expense">Crop expenses</div>
                    <div>
                        <button className="seedetails">See Details</button>
                    </div>
                </div>
                <div className="SlideBgridDB">
                    <span className="totalA">Rs.55,000</span>
                    <span className="totalB">Total</span>
                </div>

                <div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: "50%", backgroundColor: "#008000" }}></div>
                        <div className="progress-bar" style={{ width: "30%", backgroundColor: "#00FF00" }}></div>
                        <div className="progress-bar" style={{ width: "20%", backgroundColor: "#ADFF2F" }}></div>
                        <div className="progress-bar" style={{ width: "10%", backgroundColor: "#FFFF00" }}></div>
                    </div>
                </div>

                <div className="salaryandcolor">
                    <div>
                        <div className="salary">25k</div>
                        <div className="colorsalary">
                            <div className="rounddarkgreen"></div>
                            <div className="slarytext">Salary</div>
                        </div>
                    </div>
                    <div>
                        <div className="salary">15k</div>
                        <div className="colorsalary">
                            <div className="roundlight"></div>
                            <div className="slarytext">Vehicle</div>
                        </div>
                    </div>
                    <div>
                        <div className="salary">10k</div>
                        <div className="colorsalary">
                            <div className="roundverylight"></div>
                            <div className="slarytext">Food</div>
                        </div>
                    </div>
                    <div>
                        <div className="salary">5k</div>
                        <div className="colorsalary">
                            <div className="roundyellow"></div>
                            <div className="slarytext">Equip</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmingComponentSlideB;
