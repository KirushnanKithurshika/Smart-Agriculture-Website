import React from 'react';
import './jobs.css';
import TaskTable from '../../Crop-Management/tablecropmanagement';

const Jobs = () => {
  const jobsData = [
    {
      id: 1,
      description: 'Watering plants',
      section: 'Greenhouse 1',
      crop: 'Tomatoes',
      action: 'Daily',
      assignee: 'John Doe',
      dueDate: '2024-12-10',
    },
    {
      id: 2,
      description: 'Fertilizing soil',
      section: 'Field A',
      crop: 'Carrots',
      action: 'Weekly',
      assignee: 'Jane Smith',
      dueDate: '2024-12-09',
    },
    {
      id: 3,
      description: 'Pest control',
      section: 'Greenhouse 2',
      crop: 'Peppers',
      action: 'Monthly',
      assignee: 'Alice Johnson',
      dueDate: '2024-12-15',
    },
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="jobs-container">   
      <TaskTable/>
    </div>
  );
};

export default Jobs;
