import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidenavigationbar from '../../components/sidenavbar';
import TaskTable from './tablecropmanagement'; // Import the TaskTable component
import Paddyfield from '../../assets/paddyfield.png';
import './cropdetails.css';

function Cropdetails() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'Prepare Soil',
      assignedTo: 'Farmer A',
      status: 'Pending',
      deadline: '2024-12-01',
    },
    {
      id: 2,
      taskName: 'Sow Seeds',
      assignedTo: 'Farmer B',
      status: 'In Progress',
      deadline: '2024-12-05',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle Delete Task
  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setIsDeleting(true);
      setTimeout(() => { // Simulate API call
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete));
        setTaskToDelete(null);
        setIsModalOpen(false);
        setIsDeleting(false);
      }, 1000); // Simulated delay
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      taskName: 'New Farming Task',
      assignedTo: 'Farmer C',
      status: 'Pending',
      deadline: '2024-12-15',
    };
    setTasks([...tasks, newTask]);
  };

  const [activeButton, setActiveButton] = useState('crops');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="cropmanagement-container">
      <div className="grid-item grid-item-1">
        <Navbar />
      </div>
      <div className="grid-item grid-item-2"></div>
      <div className="grid-item grid-item-3"></div>
      <div className="grid-item grid-item-4">
        <Sidenavigationbar />
      </div>

      <div className="croplog-dashboard grid-item">
        <div className="button-container">
          <Link to="/cropmanagement">
            <button
              className={`nav-button ${activeButton === 'crops' ? 'active-button' : ''}`}
              onClick={() => handleButtonClick('crops')}
            >
              Crops
            </button>
          </Link>

          <Link to="/croptask">
            <button
              className={`nav-button ${activeButton === 'taskManagement' ? 'active-button' : ''}`}
              onClick={() => handleButtonClick('taskManagement')}
            >
              Task Management
            </button>
          </Link>
        </div>

        <div className="crop-task-container">
          <img src={Paddyfield} alt="Paddy Field" />
        </div>

        <TaskTable tasks={tasks} onDelete={handleDelete} handleAddTask={handleAddTask} />
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this task?</p>
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

export default Cropdetails;
