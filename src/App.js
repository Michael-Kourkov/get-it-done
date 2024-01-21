import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import SideDrawer from './components/SideDrawer';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false, subtasks: [] }; 
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


  return (
    <div className="App">
      <header className="App-header">
      <SideDrawer />
      <Navbar />
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onAddSubtask={addSubtask} />
      </header>
    </div>
  );
}

export default App;
