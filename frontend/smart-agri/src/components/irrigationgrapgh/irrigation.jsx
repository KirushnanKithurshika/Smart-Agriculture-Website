import React from 'react';
import Highcharts from 'highcharts';
import './irrigation.css';
import HighchartsReact from 'highcharts-react-official';

const IrrigationWaterCapacity = () => {
  const options = {
    chart: {
      type: 'line',
      height: 300, // Set the height of the chart (in pixels)
    },
    title: {
      text: 'Irrigation Water Capacity for Crops',
    },
    subtitle: {
      text: 'Water requirement per crop at different stages of growth',
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
      title: {
        text: 'Growth Stages',
      },
    },
    yAxis: {
      title: {
        text: 'Water Capacity (liters)',
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
  };

  return (
    <div className='irrigation'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default IrrigationWaterCapacity;
