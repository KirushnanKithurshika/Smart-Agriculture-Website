import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './phosphorus.css';

const PhosphorusStatus = () => {
    const [phosphorusLevel, setPhosphorusLevel] = useState(null);
    const allowableRange = { min: 5, max: 15 }; // Set your desired allowable range for phosphorus
    const [status, setStatus] = useState('Normal');
    
    // Fetch phosphorus data from the backend
    const fetchPhosphorusData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logs/latest'); // Adjust URL to your backend API
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched phosphorus data:', data);
            
            setPhosphorusLevel(data.P || 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Check if phosphorus level is within range
    useEffect(() => {
        fetchPhosphorusData();
    }, []);

    useEffect(() => {
        if (phosphorusLevel !== null) {
            if (phosphorusLevel < allowableRange.min || phosphorusLevel > allowableRange.max) {
                setStatus('Critical');
            } else {
                setStatus('Normal');
            }
        }
    }, [phosphorusLevel]);

    if (phosphorusLevel === null) {
        return <div>Loading...</div>;
    }

    // Chart options for phosphorus data
    const getPhosphorusChartOptions = () => ({
        chart: {
            type: 'pie',
            width: 180,
            height: 180,
            events: {
                load: function () {
                    const chart = this;
                    const text = `P`; // Add unit
                    chart.renderer.text(
                        text,
                        chart.plotLeft + chart.plotWidth / 2,
                        chart.plotTop + chart.plotHeight / 2
                    )
                        .css({
                            color: '#45782',
                            fontSize: '22px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        })
                        .attr({ zIndex: 500 })
                        .add();
                }
            }
        },
        title: { text: 'Phosphorus' },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: { enabled: false },
                center: ['50%', '50%']
            }
        },
        series: [
            {
                name: 'Phosphorus',
                data: [
                    { name: 'Phosphorus', y: phosphorusLevel },
                    { name: 'No Phosphorus', y: 100 - phosphorusLevel }
                ]
            }
        ],
        colors: ['#FFD700', '#cfd8dc'] // You can choose a color scheme
    });

    return (
        <div className="phosphorus-status-container">
            <div className="phosphorus-graph-container">
                <HighchartsReact highcharts={Highcharts} options={getPhosphorusChartOptions()} />
                <div className="phosphorus-info">
                    <h2>Phosphorus-level:{phosphorusLevel} mg/l</h2>
                    
                    <p>Allowable range: {allowableRange.min} - {allowableRange.max} mg/l</p>
                    <p style={{ color: status === 'Critical' ? 'red' : 'green' }}>Status: {status}</p>
                </div>
            </div>
        </div>
    );
};

export default PhosphorusStatus;
