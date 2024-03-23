// src/components/EditTaskForm.js

import React, { useState } from 'react';

const EditTaskForm = ({ task, updateTask, cancelEdit }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty task submission
    updateTask({ ...task, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Update Task</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
};

export default EditTaskForm;
