import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './equipment.css'; // Make sure this CSS file is updated for equipment
import { useNavigate } from 'react-router-dom';

function Equipment() {
  const [equipments, setEquipments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [equipmentToDelete, setEquipmentToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/equipment');
        setEquipments(response.data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    fetchEquipments();
  }, []);

  const addEquipment = (newEquipment) => {
    setEquipments((prevEquipments) => [...prevEquipments, newEquipment]);
  };

  // Function to update an equipment in the state
  const handleUpdateEquipment = (updatedEquipment) => {
    setEquipments((prevEquipments) =>
      prevEquipments.map((equipment) =>
        equipment._id === updatedEquipment._id ? updatedEquipment : equipment
      )
    );
  };

  const handleDelete = (index) => {
    setEquipmentToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (equipmentToDelete !== null) {
      const equipmentId = equipments[equipmentToDelete]._id;
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:8000/api/equipment/${equipmentId}`);
        const updatedEquipments = equipments.filter((_, i) => i !== equipmentToDelete);
        setEquipments(updatedEquipments);
        setEquipmentToDelete(null);
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error deleting equipment:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEquipmentToDelete(null);
  };

  return (
    <div className={`gridequipment-container ${isModalOpen ? 'blur' : ''}`}>
      <div className="grid-item grid-item-1">
        <Navbar />
      </div>
      <div className="grid-item grid-item-2"></div>
      <div className="grid-item grid-item-3"></div>
      <div className="grid-item grid-item-4">
        <Sidebar />
      </div>
      <div className="equipment-dashboard grid-item">
        <div className="equipment-boardA grid-item-1">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Equipment ID</th>
                  <th>Equipment Name</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Purchase Date</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                  
                </tr>
              </thead>
              <tbody>
                {equipments.map((equipment, index) => (
                  <tr key={equipment._id}>
                    <td>{equipment.equipmentId}</td>
                    <td>{equipment.equipmentName}</td>
                    <td>{equipment.category}</td>
                    <td>{equipment.brand}</td>
                    <td>{equipment.purchaseDate}</td>
                    <td>{equipment.price}</td>
                    <td>{equipment.image}</td>
                    <td>{equipment.quantity}</td>
                    <td>{equipment.assignedTo}</td>
                    
                    <td>
                      <Link to={`/updateequipment/${equipment._id}`}>
                        <button className="editE-button">Edit</button>
                      </Link>

                      <button className="deleteE-button" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/createequipment" className="addE-button-link">
              <button className="addE-button">+ Add Equipment</button>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this equipment's details?</p>
            {isDeleting ? (
              <button className="deleteE-button" disabled>Deleting...</button>
            ) : (
              <>
                <button className="deleteE-button" onClick={confirmDelete}>Delete</button>
                <button className="cancelE-button" onClick={closeModal}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Equipment;
