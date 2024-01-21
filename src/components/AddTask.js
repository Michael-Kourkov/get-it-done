import React, { useState } from 'react';
import './AddTask.css'; // Create this CSS file for styling

function AddTask({ onAddTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText) return;
        onAddTask(taskText);
        setTaskText(''); // Clear the input after adding
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a new task" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
