// TaskForm.js

import React, { useState } from 'react';
import api from '../services/api'; // Import the Axios instance

function TaskForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', { title }); // Make a POST request to create a new task
      console.log('Task created:', response.data);
      setTitle(''); // Clear the input field after creating the task
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
