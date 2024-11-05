import React, { useState } from 'react';
import Sidebar from '../../components/sidenavbar';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import './employee.css';

function Employee() {
  const [employees, setEmployees] = useState([
    { firstName: 'Kithurshika', lastName: 'Krishnan', email: 'kithurshanithurshika@gmail.com', city: 'Batticaloa', phone: '0764181363', job: 'Manager' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const handleEdit = (index) => {
    console.log('Edit button clicked for:', employees[index]);
  };

  const handleDelete = (index) => {
    setEmployeeToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (employeeToDelete !== null) {
      const updatedEmployees = employees.filter((_, i) => i !== employeeToDelete);
      setEmployees(updatedEmployees);
      setEmployeeToDelete(null);
      setIsModalOpen(false);
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
                  <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.city}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.job}</td>
                    <td>
                      <Link to="/editemployee">
                        <button className="editE-button" onClick={() => handleEdit(index)}>Edit</button>
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

      {/* Modal for delete confirmation */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this employee details?</p>
            <button className="deleteE-button" onClick={confirmDelete}>Delete</button>
            <button className="cancelE-button" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employee;
