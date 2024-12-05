import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import MoistureGraph from '../../components/Moisturepichart/moisturepichart';
import './moisture_panel.css';

const MoistureDashboard = () => {
  const [moisture, setMoisture] = useState(20);
  const [timeRange, setTimeRange] = useState('Last Hour');
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    fetchData(timeRange);
  }, [timeRange]);

  const fetchData = async (range) => {
    try {
      // Fetch logs from the backend (adjust the URL if needed)
      const response = await fetch('http://localhost:8000/api/logs');
      const data = await response.json();
      
      if (response.ok) {
        // Filter logs based on time range (you can adjust the filtering logic here)
        const filteredData = filterLogsByTimeRange(data, range);
        setChartData(filteredData);
      } else {
        console.error('Error fetching logs:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterLogsByTimeRange = (logs, range) => {
    const now = new Date();
    let filteredLogs = [];

    switch (range) {
      case 'Last Hour':
        filteredLogs = logs.filter(log => {
          const logTime = new Date(log.time);
          return (now - logTime) <= 3600000; // 1 hour in milliseconds
        });
        break;
      case '6 hours':
        filteredLogs = logs.filter(log => {
          const logTime = new Date(log.time);
          return (now - logTime) <= 21600000; // 6 hours in milliseconds
        });
        break;
      case '1 Day':
        filteredLogs = logs.filter(log => {
          const logTime = new Date(log.time);
          return (now - logTime) <= 86400000; // 1 day in milliseconds
        });
        break;
      case '1 Week':
        filteredLogs = logs.filter(log => {
          const logTime = new Date(log.time);
          return (now - logTime) <= 604800000; // 1 week in milliseconds
        });
        break;
      case '1 Month':
        filteredLogs = logs.filter(log => {
          const logTime = new Date(log.time);
          return (now - logTime) <= 2592000000; // 1 month in milliseconds
        });
        break;
      default:
        filteredLogs = logs;
    }

    return filteredLogs.map(log => log.moistureContent); // Extract moisture data
  };

  const chartOptions = {
    chart: {
      type: 'area',
      backgroundColor: '#f5f5f5',
      height: 170, // Set the desired height here
      width:400,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ['4:10', '4:20', '4:30', '5:00', '5:10', '5:20'], // Adjust the categories if needed
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

      <div className="moisture-graph">
        <div><HighchartsReact highcharts={Highcharts} options={chartOptions} /></div>
         <div><MoistureGraph/></div>
      </div>
      
    </div>
  );
};

export default MoistureDashboard;
