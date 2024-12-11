import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './costgraph.css';

const CropCostChart = () => {
   
    const crops = [
        {
            name: 'Red Rice',
            fixedCost: 5000,
            variableCost: 3000,
            totalCost: 8000,
        },
        {
            name: 'White Rice',
            fixedCost: 4500,
            variableCost: 2500,
            totalCost: 7000,
        },
        {
            name: 'Black Rice',
            fixedCost: 6000,
            variableCost: 3500,
            totalCost: 9500,
        },
        {
            name: 'Tomato',
            fixedCost: 4000,
            variableCost: 1500,
            totalCost: 5500,
        },
        {
            name: 'Potato',
            fixedCost: 3500,
            variableCost: 2000,
            totalCost: 5500,
        },
    ];

    const options = {
        chart: {
            type: 'column', 
            width: 560,
            height: 300,
        },
        title: {
            text: 'Crop Costs Breakdown',
            style: {
                fontWeight: 'bold',
                fontSize: '20px',
                color:'#53808C',
            },
        },
        xAxis: {
            categories: crops.map(crop => crop.name),
            title: {
                text: 'Crops',
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cost (Rs)',
            },
        },
        series: [
            {
                name: 'Fixed Costs',
                data: crops.map(crop => crop.fixedCost),
                color: '#C137A5', 
            },
            {
                name: 'Variable Costs',
                data: crops.map(crop => crop.variableCost),
                color: '#25D5F1', 
            },
            {
                name: 'Total Costs',
                data: crops.map(crop => crop.totalCost),
                color: '#7EE51E', 
            },
        ],
        tooltip: {
            shared: true,
            useHTML: true,
            pointFormat: '<b style="font-size: 10px;">{series.name}:</b> <span style="font-size: 10px;">{point.y} Rs</span><br>',

        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '12px',
               
            },

            symbolWidth: 20, 
            symbolHeight: 10, 
            symbolRadius: 0,
        },
    };

    return (
        <div className='crop-cost-chart'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default CropCostChart;
