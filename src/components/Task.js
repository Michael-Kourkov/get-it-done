// Task.js

import React, { useState } from 'react';

function Task({ task, onToggleTask, onAddSubtask }) {
    const [subtaskText, setSubtaskText] = useState('');

    const handleAddSubtask = (e) => {
        e.preventDefault();
        if (!subtaskText) return;
        onAddSubtask(task.id, subtaskText);
        setSubtaskText('');
    };

    return (
        <li className={task.completed ? 'completed' : ''}>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggleTask(task.id)} 
            />
            {task.text}
            <form onSubmit={handleAddSubtask}>
                <input 
                    type="text" 
                    placeholder="Add a subtask" 
                    value={subtaskText} 
                    onChange={(e) => setSubtaskText(e.target.value)}
                />
                <button type="submit">Add Subtask</button>
            </form>
            <ul>
                {task.subtasks.map((subtask, index) => (
                    <li key={index} className={subtask.completed ? 'completed' : ''}>
                        {subtask.text}
                        {/* Add checkbox for subtask if needed */}
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default Task;
