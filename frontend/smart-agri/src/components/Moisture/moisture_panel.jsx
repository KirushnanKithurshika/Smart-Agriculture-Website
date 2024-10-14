import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './moisture_panel.css'


const MoistureDashboard = () => {
  const [moisture, setMoisture] = useState(20); 
  const [timeRange, setTimeRange] = useState('Last Hour');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
   
    fetchData(timeRange);
  }, [timeRange]);

  const fetchData = (range) => {
    
    const data = {
      'Last Hour': [10, 40, 20, 20, 20], 
      '6 hours': [20, 30, 25, 40, 35],
      '1 Day': [15, 25, 35, 20, 45],
      '1 Week': [30, 40, 35, 50, 45],
      '1 Month': [25, 45, 35, 55, 50]
    };
    setChartData(data[range] || []);
  };

  const chartOptions = {
    chart: {
      type: 'area',
      backgroundColor: '#f5f5f5', 
    },
    title: {
      text: null, 
    },
    xAxis: {
      categories: ['4:10', '4:20', '4:30', '5:00', '5:10', '5:20'],
      title: {
        text: 'Time',
      },
    },
    yAxis: {
      title: {
        text: 'Moisture (%)',
      },
      max: 100, 
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
          },
          stops: [
            [0, '#00bfff'], 
            [1, 'rgba(0,191,255,0)'], 
          ],
        },
        lineColor: '#00bfff', 
        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Moisture',
        data: chartData,
        color: '#00bfff', 
      },
    ],
  };

  return (
    <div className="moisture-dashboard">
   

     
      <div className="time-range-buttons">
        {['Last Hour', '6 hours', '1 Day', '1 Week', '1 Month'].map((range) => (
          <button
            key={range}
            className={`time-btn ${timeRange === range ? 'active' : ''}`}
            onClick={() => setTimeRange(range)}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Highcharts graph */}
      <div className="moisture-graph">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default MoistureDashboard;
