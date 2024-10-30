import React from 'react';
import './logpage.css';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';


const LogsTable = () => {
  const headers = ['Time', 'PH', 'K (mg/l)', 'N (mg/l)', 'P (mg/l)'];
  const rows = new Array(10).fill(['', '', '', '', '']); // Creates empty rows for demonstration
 
  return (
    <div className='grid-container'>
            <div className='grid-item grid-item-1'>
                <Navbar />
               
            </div>
            <div className='grid-item grid-item-2'>
            
            
            
            </div>
            <div className='grid-item grid-item-3'>
            </div>
            <div className='grid-item grid-item-4'>
            <Sidebar />
            </div>
            <div className='grid-item grid-item-5'>
            <div className="logs-table-container">
      <table className="logs-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
            <div className='grid-item grid-item-6'>
               
            </div>
        </div>
  );
};

export default LogsTable;
