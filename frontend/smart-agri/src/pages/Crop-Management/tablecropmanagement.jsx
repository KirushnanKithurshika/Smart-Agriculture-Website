import React from 'react';
import './tablecropmanagemnet.css'; // Create and customize styles for your table if needed.

function TaskTable({ tasks, handleAddTask }) {
  return (
    <div className="task-management-table-container">
      <h2>Paddy Field Management Tasks</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>End Period</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.taskName}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.deadline}</td>
              <td>
               <button className="editcrop-button">Edit</button>
                      <button className="deletecrop-button" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskTable;
