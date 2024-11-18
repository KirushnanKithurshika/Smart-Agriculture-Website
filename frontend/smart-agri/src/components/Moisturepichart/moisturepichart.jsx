import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MoistureGraph = () => {
    // State to store the moisture percentage
    const [moisturePercentage, setMoisturePercentage] = useState(null);

    // Fetch data from the backend API
    const fetchMoistureData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logs/latest'); // Adjust URL to your backend API
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            // Set the moisture percentage (Assuming the data contains a `moistureContent` field)
            setMoisturePercentage(data.moistureContent || 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call the fetchMoistureData function when the component mounts
    useEffect(() => {
        fetchMoistureData();
    }, []); // Empty dependency array to run only on mount

    // Return a loading indicator until moisture data is available
    if (moisturePercentage === null) {
        return <div>Loading...</div>;
    }

    // Highcharts configuration for the moisture pie chart
    const getMoistureChartOptions = () => ({
        chart: {
            type: 'pie',
            width: 200,
            height: 200,
            events: {
                load: function () {
                    const chart = this;
                    const text = `💧</br>${moisturePercentage} %`;
                    chart.renderer.text(
                        text,
                        chart.plotLeft + chart.plotWidth / 2 - 10,
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
        title: { text: 'Moisture' },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: { enabled: false },
                center: ['50%', '50%']
            }
        },
        series: [
            {
                name: 'Moisture',
                data: [{ name: 'Moisture', y: moisturePercentage }, { name: 'Dry', y: 100 - moisturePercentage }]
            }
        ],
        colors: ['#00BFFF', '#cfd8dc']
    });

    return <HighchartsReact highcharts={Highcharts} options={getMoistureChartOptions()} />;
};

export default MoistureGraph;
