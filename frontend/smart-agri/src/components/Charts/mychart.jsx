import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './mychart.css';

const MyChart = () => {
    const moisturePercentage = 75;  
    const phLevel = 6.5; 
    const nitrogenLevel = 25;  
    const phosphorusLevel = 30;  
    const potassiumLevel = 40;  

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
                        chart.plotLeft + chart.plotWidth / 2 - 10 ,
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
        colors: titleText === 'Moisture' ? ['#00BFFF', '#cfd8dc'] : ['#4caf50'] // Light blue for moisture
    });
    

    const getBarChartOptions = () => ({
        chart: { type: 'column', width: 500, height: 200 }, // Adjust height for smaller bars
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
            labels: { // Added missing closing bracket for labels
                style: {
                    fontSize: '10px',       
                    color: '#888888',      // Y-axis labels font color
                    fontFamily: 'Arial, sans-serif' // Y-axis labels font family
                }
            }
        },
        tooltip: {
            valueSuffix: ' mg/L',
            style: {
                fontSize: '10px',          // Tooltip font size
                color: '#000000',         // Tooltip font color
                fontFamily: 'Arial, sans-serif' // Tooltip font family
            }
        },
        series: [
            {
                name: 'Nutrient Levels',
                data: [
                    { y: nitrogenLevel, color: '#FF5733' },
                    { y: phosphorusLevel, color: '#74158C' },
                    { y: potassiumLevel, color: '#01495C' }
                ],
                pointWidth:50
            
            }
        ]
    });
    
    return (
        <div className="chart-panel-area">
            <div className="chart-panel">
                <div className="chart-item">
                    <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(moisturePercentage, 'Moisture', '🌧️', '%')} />
                
                </div>
                <div className="chart-item">
                    <HighchartsReact highcharts={Highcharts} options={getPieChartOptions(phLevel, 'pH Level', '⚗️','')} />
                </div>
                <div className="chart-item ">
                    <HighchartsReact highcharts={Highcharts} options={getBarChartOptions()} />
                </div>
            </div>
        </div>
    );
};

export default MyChart;
