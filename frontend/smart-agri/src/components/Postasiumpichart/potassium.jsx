import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './potassium.css';

const PotassiumStatus = () => {
    const [potassiumLevel, setPotassiumLevel] = useState(null);
    const allowableRange = { min: 3, max: 8 }; // Set your desired allowable range for Potassium
    const [status, setStatus] = useState('Normal');
    
    // Fetch potassium data from the backend
    const fetchPotassiumData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logs/latest'); // Adjust URL to your backend API
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched potassium data:', data);
            
            setPotassiumLevel(data.K || 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Check if potassium level is within range
    useEffect(() => {
        fetchPotassiumData();
    }, []);

    useEffect(() => {
        if (potassiumLevel !== null) {
            if (potassiumLevel < allowableRange.min || potassiumLevel > allowableRange.max) {
                setStatus('Critical');
            } else {
                setStatus('Normal');
            }
        }
    }, [potassiumLevel]);

    if (potassiumLevel === null) {
        return <div>Loading...</div>;
    }

    // Chart options for potassium data
    const getPotassiumChartOptions = () => ({
        chart: {
            type: 'pie',
            width: 180,
            height: 180,
            events: {
                load: function () {
                    const chart = this;
                    const text = `K`; // Add unit
                    chart.renderer.text(
                        text,
                        chart.plotLeft + chart.plotWidth / 2,
                        chart.plotTop + chart.plotHeight / 2
                    )
                        .css({
                            color: '#45782',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        })
                        .attr({ zIndex: 500 })
                        .add();
                }
            }
        },
        title: { text: 'Potassium' },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: { enabled: false },
                center: ['50%', '50%']
            }
        },
        series: [
            {
                name: 'Potassium',
                data: [
                    { name: 'Potassium', y: potassiumLevel },
                    { name: 'No Potassium', y: 100 - potassiumLevel }
                ]
            }
        ],
        colors: ['#8B4513', '#cfd8dc'] // You can choose a color scheme
    });

    return (
        <div className="potassium-status-container">
            <div className="potassium-graph-container">
                <HighchartsReact highcharts={Highcharts} options={getPotassiumChartOptions()} />
                <div className="potassium-info">
                    <h2>Potassium-level:{potassiumLevel} mg/l</h2>
                    <p>Allowable range: {allowableRange.min} - {allowableRange.max} mg/l</p>
                    <p style={{ color: status === 'Critical' ? 'red' : 'green' }}>Status: {status}</p>
                </div>
            </div>
        </div>
    );
};

export default PotassiumStatus;
