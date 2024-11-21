import React, { useState } from 'react';
import axios from 'axios';
import './createequipment.css'; 
import Navbar from '../../components/navbar'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CreateEquipmentForm = ({ addEquipment }) => {
  const [formData, setFormData] = useState({
    equipmentId: '',
    equipmentName: '',
    category: '',
    brand: '',
    purchaseDate: '',
    price: '',
    image: '', 
    quantity: '',
    assignedTo: '',
  });

  const navigate = useNavigate();  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (!formData.equipmentId || !formData.equipmentName) {
      toast.error('Equipment ID and Name are required.');
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8000/api/equipment", formData);
      console.log("Equipment added:", response.data);
      toast.success('Equipment added successfully!');
      
     
      setFormData({
        equipmentId: '',
        equipmentName: '',
        category: '',
        brand: '',
        purchaseDate: '',
        price: '',
        image: '',
        quantity: '',
        assignedTo: '',
      });

      navigate('/equipment');  

    } catch (error) {
      console.error('Error adding equipment:', error.response ? error.response.data : error.message);
      toast.error('Error adding equipment: ' + (error.response ? error.response.data.message : error.message));
    }
  };


  const handleCancel = () => {
    setFormData({
      equipmentId: '',
      equipmentName: '',
      category: '',
      brand: '',
      purchaseDate: '',
      price: '',
      image: '',
      quantity: '',
      assignedTo: '',
    });
    navigate('/equipment');
  };

  return (
    <div className="gridform-container">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="formadd-section">
        <div className="formadd-container">
          <h2 className="form-title">Create Equipment</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="equipmentId"
              placeholder="Equipment ID"
              value={formData.equipmentId}  
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="equipmentName"
              placeholder="Equipment Name"
              value={formData.equipmentName}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="IT">IT</option>
            </select>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
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
            <div className="button-group">
              <button type="submit" className="submit-button">Create Equipment</button>
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEquipmentForm;
