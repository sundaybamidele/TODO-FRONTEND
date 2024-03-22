// src/components/Task.js
// This is the task component. It is responsible for displaying a single task.

import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      <strong>{task.title}</strong>
      <br />
      <p>{task.description}</p>
      <br/>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;