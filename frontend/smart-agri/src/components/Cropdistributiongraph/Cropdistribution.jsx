import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './cropdistributiongraph.css';
const CropDistributionChart = () => {
    const options = {
        chart: {
            type: 'pie',
            width: 400,  
            height: 300,
        },
        title: {
            text: 'Crop Distribution',
            style: {
                fontWeight: 'bold',
                fontSize: '20px',
                color:'#53808C',
            },
        },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: {
                    enabled: false, 
                },
                startAngle: -90,
            },
        },
        series: [
            {
                name: 'Crops',
                data: [
                    { name: 'Red Rice', y: 30, color: '#C137A5' },
                    { name: 'White Rice', y: 20, color: '#25D5F1' },
                    { name: 'Black Rice', y: 15, color: '#FFA500' },
                    { name: 'Tomato', y: 25, color: '#7EE51E' },
                    { name: 'Potato', y: 10, color: '#53808C' },
                ],
                showInLegend: true,
            },
        ],
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '14px',
            },
            labelFormatter: function () {
                return `<span style="display:inline-block;width:20px;height:20px;margin-right:10px;background-color:${this.color};"></span>${this.name}`;
            },
            symbolWidth: 20, 
            symbolHeight: 10, 
            symbolRadius: 0, 
            layout: 'vertical',   
            align: 'right',      
            verticalAlign: 'middle',  
            x: 20, 
            y:20,
            itemMarginTop: 10, 
            itemMarginBottom: 10,
            itemDistance: 10, 
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
    };
    
    

    return (
        <div  className='crop-distribution'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default CropDistributionChart;
