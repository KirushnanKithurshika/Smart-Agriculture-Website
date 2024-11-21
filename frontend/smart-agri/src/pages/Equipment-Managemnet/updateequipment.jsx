import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './updateequipment.css';
import Navbar from '../../components/navbar';
import axios from 'axios';

const UpdateEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const onUpdate = location.state?.onUpdate;

  const [formData, setFormData] = useState({
    equipmentId: '',
    equipmentName: '',
    category: '',
    brand: '',
    purchaseDate: '',
    price: '',
    image: '', // Use string for image URL
    quantity: '',
    assignedTo: '',
  });

  const [previewImage, setPreviewImage] = useState(null); // For image preview
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/equipment/${id}`);
        setFormData(response.data);
        setPreviewImage(response.data.image); // Set preview to existing image URL
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch equipment data');
        setLoading(false);
      }
    };

    fetchEquipmentData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Update preview image if the input is for the image URL
    if (name === 'image') {
      setPreviewImage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/equipment/${id}`, formData);
      if (onUpdate) onUpdate(); // Notify parent component about update
      navigate('/equipment');
    } catch (err) {
      setError('Failed to update equipment data');
    }
  };

  const handleCancel = () => {
    navigate('/equipment');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="update-equipment-grid">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="form-section">
        <h2>Edit Equipment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="equipmentId"
            value={formData.equipmentId}
            onChange={handleChange}
            placeholder="Equipment ID"
            required
          />
          <input
            type="text"
            name="equipmentName"
            value={formData.equipmentName}
            onChange={handleChange}
            placeholder="Equipment Name"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate ? formData.purchaseDate.slice(0, 10) : ''} // Proper date format
            onChange={handleChange}
            placeholder="Purchase Date"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          {previewImage && (
            <div className="image-preview">
              <img src={previewImage} alt="Selected equipment" />
            </div>
          )}
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
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
          <div className="buttonE-group">
            <button type="submit" className="update-button">Update Equipment</button>
            <button type="button" onClick={handleCancel} className="cancelupdate-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
