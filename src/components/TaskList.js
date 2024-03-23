// TaskList.js

import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Import the Axios instance

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get('/tasks'); // Make a GET request to fetch tasks
        setTasks(response.data); // Update state with the fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Run this effect only once when the component mounts

  const handleDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`); // Make a DELETE request to delete the task
      setTasks(tasks.filter(task => task.id !== taskId)); // Remove the deleted task from the state
      console.log('Task deleted:', taskId);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask); // Make a PUT request to update the task
      setTasks(tasks.map(task => (task.id === updatedTask.id ? response.data : task))); // Update the task in the state
      console.log('Task updated:', response.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <TaskItem task={task} onDelete={handleDelete} onUpdate={handleUpdate} /> {/* Pass task, delete and update functions as props */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = async () => {
    try {
      const updatedTask = { ...task, title: updatedTitle }; // Create an updated task object
      await onUpdate(updatedTask); // Call the onUpdate function from props
      setIsEditing(false); // Exit edit mode after updating the task
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <div>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button> {/* Call the onDelete function from props */}
        </div>
      )}
    </div>
  );
}

export default TaskList;
