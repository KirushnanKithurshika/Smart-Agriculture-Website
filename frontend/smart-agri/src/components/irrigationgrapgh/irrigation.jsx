import React from 'react';
import Highcharts from 'highcharts';
import './irrigation.css';
import HighchartsReact from 'highcharts-react-official';

const IrrigationWaterCapacity = () => {
  const options = {
    chart: {
      type: 'line',
      height: 250,
    },
    title: {
      text: 'Irrigation Water Capacity for Crops',
      style: {
        fontSize: '16px', 
        fontWeight: 'bold', 
        color: '#0A7B91', 
      },
    },
    subtitle: {
      text: 'Water requirement per crop at different stages of growth',
      style: {
        fontSize: '12px', 
       color: '#666666', 
      },
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
      title: {
        text: 'Growth Stages',
        style: {
          fontSize: '12px', 
          fontWeight: 'bold', 
        },
      },
      labels: {
        style: {
          fontSize: '12px', 
        },
      },
    },
    yAxis: {
      title: {
        text: 'Water Capacity (liters)',
        style: {
          fontSize: '12px', 
          fontWeight: 'bold', 
        },
      },
      labels: {
        style: {
          fontSize: '12px', 
        },
      },
    },
    series: [
      {
        name: 'Crop A',
        data: [50, 80, 120, 150, 200],
        color: '#971F7F',
      },
      {
        name: 'Crop B',
        data: [40, 70, 100, 130, 180],
        color: '#f7a35c',
      },
      {
        name: 'Crop C',
        data: [30, 60, 90, 110, 160],
        color: '#21758B',
      },
    ],
    legend: {
      itemStyle: {
        fontSize: '12px', 
        fontWeight: 'normal',
      },
    },
  };

  return (
    <div className='irrigation'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default IrrigationWaterCapacity;
