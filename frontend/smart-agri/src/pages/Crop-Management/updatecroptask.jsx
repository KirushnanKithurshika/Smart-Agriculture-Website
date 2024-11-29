import React from 'react';
import './updatecroptask.css'; 
import Navbar from '../../components/navbar';

const UpdateTask = () => {
  return (
    <div className="update-task-grid">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="form-section">
        <h2>Update Task</h2>
        <form>
          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            required
          />
          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            required
          />
          <select name="status" required>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="date"
            name="deadline"
            placeholder="Deadline"
            required
          />
          <div className="buttonT-group">
            <button type="submit" className="update-button">Update Task</button>
            <button type="button" className="cancelupdate-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
