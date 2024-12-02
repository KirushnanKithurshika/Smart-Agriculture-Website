import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar';
import axios from 'axios';
import './updatecroptask.css';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const onUpdate = location.state?.onUpdate;

  const [formData, setFormData] = useState({
    taskName: '',
    assignedTo: '',
    status: 'Pending',
    deadline: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/croptask/tasks/${id}`);
        if (!response.data) {
          throw new Error('No data received');
        }
        setFormData({
          taskName: response.data.taskName || '',
          assignedTo: response.data.assignedTo || '',
          status: response.data.status || 'Pending',
          deadline: response.data.deadline ? new Date(response.data.deadline).toISOString().split('T')[0] : '',
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch task data');
        setLoading(false);
      }
    };

    fetchTaskData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/croptask/tasks/${id}`, formData);
      if (onUpdate) onUpdate(response.data);
      navigate('/cropmanagement');    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleCancel = () => {
    navigate(-1);  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="update-task-grid">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="form-section">
        <h2>Update Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            placeholder="Task Name"
            required
          />
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            placeholder="Assigned To"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
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
          <div className="buttonT-group">
            <button type="submit" className="update-button">
              Update Task
            </button>
            <button type="button" onClick={handleCancel} className="cancelupdate-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
