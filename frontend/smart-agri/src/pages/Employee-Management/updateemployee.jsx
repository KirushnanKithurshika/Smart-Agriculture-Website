// src/pages/Employee-Management/EditEmployee.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './updateemployee.css';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';


const EditEmployee = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        city: employee.city,
        phone: employee.phone,
        job: employee.job,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated employee:', formData);
    navigate('/'); // Redirect to the employee management page
  };

  const handleCancel = () => {
    navigate('/'); // Navigate back to the employee management page or any desired route
  };

  return (
    <div className="edit-employee-grid">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="form-section">
        <h2>Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
          <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Job Title" required />
          <div className="buttonE-group">
            <button type="submit" className="update-button">Update Employee</button>
            <Link to="/employee">
            <button type="button" onClick={handleCancel} className="cancelupdate-button">Cancel</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
