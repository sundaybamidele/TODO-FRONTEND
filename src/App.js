import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    cancelEdit();
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const toggleEdit = (task) => {
    setIsEditing(!isEditing);
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingTask(null);
  };

  useState(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <center>
        <h1>Welcome to my TODO Web Application</h1>
        <br/>
        <h3>Work in progress.............</h3>
      </center>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '20px', maxWidth: '200px' }}>
          <Calendar value={date} onChange={handleDateChange} />
        </div>
        <div style={{ textAlign: 'center',  maxWidth: '200'}}>
          <Clock value={currentTime} />
        </div>
      </div>
      {isEditing ? (
        <EditTaskForm task={editingTask} updateTask={updateTask} cancelEdit={cancelEdit} />
      ) : (
        <>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleEdit={toggleEdit} />
        </>
      )}
    </div>
  );
}

export default App;
