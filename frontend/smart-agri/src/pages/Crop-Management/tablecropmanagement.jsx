import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './tablecropmanagemnet.css';

function TaskTable({ handleAddTask }) {
  const [tasks, setTasks] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/croptask/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Handle task deletion
  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (taskToDelete !== null) {
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:8000/api/croptask/tasks/${taskToDelete}`);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskToDelete));
      } catch (error) {
        console.error('Error deleting task:', error);
      } finally {
        setIsDeleting(false);
        setIsModalOpen(false);
        setTaskToDelete(null);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div className="task-management-table-container">
      <h2>Paddy Field Management Tasks</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>End Period</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.taskName}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{new Date(task.deadline).toLocaleDateString()}</td>
              <td>
                {/* Edit button */}
                <Link to={`/updatecroptask/${task._id}`}>
                  <button className="editcrop-button">Edit</button>
                </Link>

                {/* Delete button */}
                <button
                  className="deletecrop-button"
                  onClick={() => handleDelete(task._id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this task?</p>
            {isDeleting ? (
              <button className="deletecrop-button" disabled>Deleting...</button>
            ) : (
              <>
                <button className="deleteE-button" onClick={confirmDelete}>
                  Delete
                </button>
                <button className="cancelE-button" onClick={closeModal}>
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskTable;
