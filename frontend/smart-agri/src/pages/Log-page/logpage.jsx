import React, { useEffect, useState } from 'react';
import './logpage.css';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';

const LogsTable = () => {
  const [logs, setLogs] = useState([]);  // State to store fetched logs
  const headers = ['Time', 'PH', 'Moisture content', 'K (mg/l)', 'N (mg/l)', 'P (mg/l)'];

  // Fetch logs data when the component mounts
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/logs');
        const data = await response.json();

        // Sort logs by time in descending order (latest logs first)
        const sortedData = data.sort((a, b) => new Date(b.time) - new Date(a.time));

        setLogs(sortedData); // Store sorted logs in state
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className='gridlog-container'>
      <div className='grid-item grid-item-1'>
        <Navbar />
      </div>
      <div className='grid-item grid-item-2'></div>
      <div className='grid-item grid-item-3'></div>
      <div className='grid-item grid-item-4'>
        <Sidebar />
      </div>
      <div className='log-dashboard grid-item'>
        <div className="logs-boardA grid-item-1">
          <table className="logs-table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>{new Date(log.time).toLocaleString()}</td> {/* Format the time */}
                  <td>{log.PH}</td>
                  <td>{log.moistureContent}</td>
                  <td>{log.K}</td>
                  <td>{log.N}</td>
                  <td>{log.P}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LogsTable;
