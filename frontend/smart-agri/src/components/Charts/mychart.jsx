import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './mychart.css';

const MyChart = () => {
    // State to store chart data
    const [chartData, setChartData] = useState({
        moisturePercentage: null, // Use null initially to check if data is fetched
        phLevel: null,
        nitrogenLevel: null,
        phosphorusLevel: null,
        potassiumLevel: null,
    });

    // Fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logs/latest');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched data:', data); // Log the fetched data
            setChartData({
                moisturePercentage: data.moistureContent || 0,  // Map to moistureContent
                phLevel: data.PH || 0,                          // Map to PH
                nitrogenLevel: data.N || 0,                      // Map to N (Nitrogen)
                phosphorusLevel: data.P || 0,                    // Map to P (Phosphorus)
                potassiumLevel: data.K || 0,                     // Map to K (Potassium)
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Function to generate pie chart options
    const getPieChartOptions = (value, titleText, emoji, unit = '%') => ({
        chart: {
            type: 'pie',
            width: 200,
            height: 200,
            events: {
                load: function () {
                    const chart = this;
                    const text = `${emoji}</br>${value} ${unit}`;
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
        title: { text: titleText },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: { enabled: false },
                center: ['50%', '50%']
            }
        },
        series: [
            {
                name: titleText,
                data: titleText === 'Moisture'
                    ? [{ name: 'Moisture', y: value }, { name: 'Dry', y: 100 - value }]
                    : [{ name: titleText, y: value }]
            }
        ],
        colors: titleText === 'Moisture' ? ['#00BFFF', '#cfd8dc'] : ['#4caf50']
    });

    const getBarChartOptions = () => ({
        chart: { type: 'column', width: 500, height: 200 },
        title: { 
            text: 'Nutrient Levels',
            style: {
                fontSize: '14px',
                color: '#333333',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
            }
        },
        xAxis: {
            categories: ['Nitrogen', 'Phosphorus', 'Potassium'],
            title: { text: null },
            labels: {
                style: {
                    fontSize: '12px',
                    color: '#888888',
                    fontFamily: 'Arial, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: { 
                text: 'Amount (mg/L)', 
                align: 'high',
                style: {
                    fontSize: '10px',
                    color: '#888888',
                    fontFamily: 'Arial, sans-serif'
                }
            },
            labels: {
                style: {
                    fontSize: '10px',
                    color: '#888888',
                    fontFamily: 'Arial, sans-serif'
                }
            }
        },
        tooltip: {
            valueSuffix: ' mg/L',
            style: {
                fontSize: '10px',
                color: '#000000',
                fontFamily: 'Arial, sans-serif'
            }
        },
        series: [
            {
                name: 'Nutrient Levels',
                data: [
                    { y: chartData.nitrogenLevel, color: '#FF5733' },
                    { y: chartData.phosphorusLevel, color: '#74158C' },
                    { y: chartData.potassiumLevel, color: '#01495C' }
                ],
                pointWidth: 50
            }
        ]
    });

    // Check if chart data is available before rendering the charts
    if (chartData.moisturePercentage === null || chartData.phLevel === null) {
        return <div>Loading...</div>; // Show loading until data is available
    }

    return (
        <div className="chart-panel-area">
            <div className="chart-panel">
                <div className="chart-item">
                    <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(chartData.moisturePercentage, 'Moisture', '🌧️', '%')} />
                </div>
                <div className="chart-item">
                    <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(chartData.phLevel, 'pH Level', '⚗️', '')} />
                </div>
                <div className="chart-item">
                    <HighchartsReact highcharts={Highcharts} options={getBarChartOptions()} />
                </div>
            </div>
        </div>
    );
};

export default MyChart;
