import React from 'react';
import './jobs.css';

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
      <h1>Assigned Jobs</h1>
      <table className="jobs-table">
        <thead>
          <tr>
            <th>Job Description</th>
            <th>Section</th>
            <th>Crop</th>
            <th>Action</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsData.map((job) => (
            <tr key={job.id}>
              <td>{job.description}</td>
              <td>{job.section}</td>
              <td>{job.crop}</td>
              <td>{job.action}</td>
              <td>{job.assignee}</td>
              <td>
                <span
                  className={
                    job.dueDate === today ? 'status-active' : 'status-inactive'
                  }
                >
                  {job.dueDate === today ? 'Active' : 'Not Active'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobs;
