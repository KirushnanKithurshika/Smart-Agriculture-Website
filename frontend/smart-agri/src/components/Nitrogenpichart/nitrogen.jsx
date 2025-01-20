import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './nitrogen.css';

const NitrogenStatus = () => {
    const [nitrogenLevel, setNitrogenLevel] = useState(null);
    const allowableRange = { min: 5, max: 12 };
    const [status, setStatus] = useState('Normal');
    
    
    const fetchNitrogenData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logs/latest'); 
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched nitrogen data:', data);
            
            setNitrogenLevel(data.N || 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

 
    useEffect(() => {
        fetchNitrogenData();
    }, []);

    useEffect(() => {
        if (nitrogenLevel !== null) {
            if (nitrogenLevel < allowableRange.min || nitrogenLevel > allowableRange.max) {
                setStatus('Critical');
            } else {
                setStatus('Normal');
            }
        }
    }, [nitrogenLevel]);

    if (nitrogenLevel === null) {
        return <div>Loading...</div>;
    }

    const getNitrogenChartOptions = () => ({
        chart: {
            type: 'pie',
            width: 200,
            height: 180,
            events: {
                load: function () {
                    const chart = this;
                    const text = `N`; 
                    chart.renderer.text(
                        text,
                        chart.plotLeft + chart.plotWidth / 2 ,
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
        title: { text: 'Nitrogen Level' },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: { enabled: false },
                center: ['50%', '50%']
            }
        },
        series: [
            {
                name: 'Nitrogen',
                data: [
                    { name: 'Nitrogen', y: nitrogenLevel },
                    { name: 'No Nitrogen', y: 100 - nitrogenLevel }
                ]
            }
        ],
        colors: ['#32CD32', '#cfd8dc'] 
    });

    return (
        <div className="nitrogen-status-container">
            <div className="nitrogen-graph-container">
                <HighchartsReact highcharts={Highcharts} options={getNitrogenChartOptions()} />
                <div className="nitrogen-info">
                    <h2>Nitrogen-level:{nitrogenLevel} mg/l</h2>
                    <p></p>
                    <p>Allowable range: {allowableRange.min} - {allowableRange.max} mg/l</p>
                    <p style={{ color: status === 'Critical' ? 'red' : 'green' }}>Status: {status}</p>
                </div>
            </div>
        </div>
    );
};

export default NitrogenStatus;
