import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import SideDrawer from './components/SideDrawer';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text, dueDate, category) => {
    const newTask = { id: Date.now(), text, dueDate, category, completed: false, subtasks: [] }; 
    setTasks([...tasks, newTask]);
};

const addSubtask = (taskId, subtaskText) => {
  setTasks(tasks.map(task => 
      task.id === taskId 
          ? { ...task, subtasks: [...task.subtasks, { text: subtaskText, completed: false }] } 
          : task
  ));
};

const toggleTask = (taskId) => {
  setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
  ));
};

const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId));
};

const editTask = (taskId, newText) => {
  setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, text: newText } : task
  ));
};

  return (
    <div className="App">
      <header className="App-header">
      <SideDrawer />
      <Navbar />
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onAddSubtask={addSubtask} onDeleteTask={deleteTask} onEditTask={editTask} />
      </header>
    </div>
  );
}

export default App;
