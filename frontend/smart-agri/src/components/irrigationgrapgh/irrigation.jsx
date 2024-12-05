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
        fontSize: '16px', // Set the font size for the title
        fontWeight: 'bold', // Make the title bold
        color: '#333333', // Set the color
      },
    },
    subtitle: {
      text: 'Water requirement per crop at different stages of growth',
      style: {
        fontSize: '12px', // Set the font size for the subtitle
       color: '#666666', // Set the color
      },
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
      title: {
        text: 'Growth Stages',
        style: {
          fontSize: '12px', // Set the font size for the xAxis title
          fontWeight: 'bold', // Make the title bold
        },
      },
      labels: {
        style: {
          fontSize: '12px', // Set the font size for xAxis labels
        },
      },
    },
    yAxis: {
      title: {
        text: 'Water Capacity (liters)',
        style: {
          fontSize: '12px', // Set the font size for the yAxis title
          fontWeight: 'bold', // Make the title bold
        },
      },
      labels: {
        style: {
          fontSize: '12px', // Set the font size for yAxis labels
        },
      },
    },
    series: [
      {
        name: 'Crop A',
        data: [50, 80, 120, 150, 200],
        color: '#7cb5ec',
      },
      {
        name: 'Crop B',
        data: [40, 70, 100, 130, 180],
        color: '#f7a35c',
      },
      {
        name: 'Crop C',
        data: [30, 60, 90, 110, 160],
        color: '#90ed7d',
      },
    ],
    legend: {
      itemStyle: {
        fontSize: '12px', // Set the font size for legend items
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
