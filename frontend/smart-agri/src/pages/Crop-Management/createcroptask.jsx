import React, { useState } from 'react';
import './createcroptask.css';
import Navbar from '../../components/navbar';
import { useNavigate } from 'react-router-dom';

const AddCropTask = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    cropType: '',
    assignedTo: '',
    status: '',
    deadline: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Reset form data after submission
    setFormData({
      taskName: '',
      cropType: '',
      assignedTo: '',
      status: '',
      deadline: '',
    });
    navigate('/croptask'); // Navigate back to crop tasks list
  };

  const handleCancel = () => {
    setFormData({
      taskName: '',
      cropType: '',
      assignedTo: '',
      status: '',
      deadline: '',
    });
    navigate('/croptask'); // Navigate back to crop tasks list
  };

  return (
    <div className="gridform-container">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="formadd-section">
        <div className="formadd-container">
          <h2 className="form-title">Add Crop Task</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="taskName"
              placeholder="Task Name"
              value={formData.taskName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cropType"
              placeholder="Crop Type"
              value={formData.cropType}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="assignedTo"
              placeholder="Assigned To"
              value={formData.assignedTo}
              onChange={handleChange}
              required
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
            <div className="button-group">
              <button type="submit" className="submit-button">Add Task</button>
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCropTask;
