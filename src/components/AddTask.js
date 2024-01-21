import React, { useState } from 'react';
import './AddTask.css'; // Create this CSS file for styling

function AddTask({ onAddTask }) {
    const [taskText, setTaskText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText) return;
        onAddTask(taskText, dueDate, category);
        setTaskText('');
        setDueDate('');
        setCategory('');
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a new task" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)}
            />
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">No category</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
