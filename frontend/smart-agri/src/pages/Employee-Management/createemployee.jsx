import React, { useState } from 'react';
import axios from 'axios';
import './createemployee.css'; 
import Navbar from '../../components/navbar'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddEmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
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
      const response = await axios.post('http://localhost:8000/api/create', formData);

      // Check if response is successful
      console.log('Employee added:', response.data);

      
      if (addEmployee) {
        addEmployee(response.data);  
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        phone: '',
        job: '',
      });

      navigate('/employee');  

    } catch (error) {
      console.error('Error adding employee:', error.response ? error.response.data : error.message);
      
      // Show error toast instead of alert
      toast.error('Error adding employee: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      job: '',
    });
    navigate('/employee');  // Navigate to employee page when Cancel is clicked
  };

  return (
    <div className="gridform-container">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="formadd-section">
        <div className="formadd-container">
          <h2 className="form-title">Add Employee</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="job"
              placeholder="Jobs Assigned"
              value={formData.job}
              onChange={handleChange}
              required
            />
            <div className="button-group">
              <button type="submit" className="submit-button">Add Employee</button>
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
