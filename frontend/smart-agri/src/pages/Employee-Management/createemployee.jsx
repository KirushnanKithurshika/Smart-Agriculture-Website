import React, { useState } from 'react';
import './createemployee.css'; 
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Added:', formData);
  };

  const handleCancel = () => {
    // Reset form data or navigate to a different page if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      job: '',
    });
    console.log('Form cancelled');
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
              <Link to="/employee">
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
