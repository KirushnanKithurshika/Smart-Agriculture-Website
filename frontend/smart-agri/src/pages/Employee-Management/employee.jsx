import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './employee.css';
import { useNavigate } from 'react-router-dom';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleDelete = (index) => {
    setEmployeeToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (employeeToDelete !== null) {
      const employeeId = employees[employeeToDelete]._id;
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:8000/api/employees/${employeeId}`);
        const updatedEmployees = employees.filter((_, i) => i !== employeeToDelete);
        setEmployees(updatedEmployees);
        setEmployeeToDelete(null);
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error deleting employee:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmployeeToDelete(null);
  };

  return (
    <div className={`gridemployee-container ${isModalOpen ? 'blur' : ''}`}>
      <div className="grid-item grid-item-1">
        <Navbar />
      </div>
      <div className="grid-item grid-item-2"></div>
      <div className="grid-item grid-item-3"></div>
      <div className="grid-item grid-item-4">
        <Sidebar />
      </div>
      <div className="employee-dashboard grid-item">
        <div className="employee-boardA grid-item-1">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Jobs</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee._id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.city}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.job}</td>
                    <td>
                      <Link to={`/editemployee/${employee._id}`}>
                        <button className="editE-button">Edit</button>
                      </Link>
                      <button className="deleteE-button" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/createemployee" className="addE-button-link">
              <button className="addE-button">+ Add Employee</button>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this employee's details?</p>
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

export default Employee;
