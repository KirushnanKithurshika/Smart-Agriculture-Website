import React from 'react';
import Highcharts from 'highcharts';
import './mychart.css';

import HighchartsReact from 'highcharts-react-official';

const MyChart = () => {
  const moisturePercentage = 75;  // Replace with dynamic data if needed

  const options = {
    chart: {
      type: 'pie',
      width:300,
      height:300,
      

    },
    title: {
      text: 'Soil Moisture Percentage'
    },
    plotOptions: {
      pie: {
        innerSize: '70%',  // Creates the donut shape
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        name: 'Moisture',
        data: [
          { name: 'Moisture', y: moisturePercentage },
          { name: 'Dry', y: 100 - moisturePercentage }
        ]
      }
    ],
    colors: ['#4caf50', '#cfd8dc']  // Custom colors: green for moisture, gray for dry
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MyChart;
