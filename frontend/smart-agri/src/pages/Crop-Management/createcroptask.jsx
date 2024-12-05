import React, { useState } from 'react';
import axios from 'axios';
import './createcroptask.css';
import Navbar from '../../components/navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddCropTaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    taskName: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  
    try {
        const response = await axios.post('http://localhost:8000/api/croptask/tasks', formData);
        console.log('Response:', response);  // Log the full response here
        if (response.status === 200 || response.status === 201) {
            console.log('Crop task added:', response.data);
            if (addTask) {
                addTask(response.data);  // Add the new task to the parent component
            }
            setFormData({
                taskName: '',
                assignedTo: '',
                status: '',
                deadline: '',
            });
            navigate('/cropmanagement');
        } else {
            toast.error('Failed to add crop task. Please try again.');
        }
    } catch (error) {
        console.error('Error adding crop task:', error.response ? error.response.data : error.message);
        toast.error('Error adding crop task: ' + (error.response ? error.response.data.message : error.message));
    }
};

  const handleCancel = () => {
    setFormData({
      taskName: '',
      assignedTo: '',
      status: '',
      deadline: '',
    });
    navigate('/cropmanagement');  // Navigate to crop management page when Cancel is clicked
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

export default AddCropTaskForm;
