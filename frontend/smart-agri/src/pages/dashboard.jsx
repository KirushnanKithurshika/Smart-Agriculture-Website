import React from 'react';
import Navbar from '../components/navbar';
import MyChart from '../components/Charts/mychart';
import './dashboard.css';

function Dashboard() {
    return (
        <div className='Page-root'>
            <div className='nav'>
                <Navbar />
            </div>

        </div>

    );
}

export default Dashboard;
