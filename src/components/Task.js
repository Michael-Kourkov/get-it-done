import React, { useState } from 'react';

function Task({ task, onToggleTask, onAddSubtask, onDeleteTask, onEditTask }) {
    const [subtaskText, setSubtaskText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleAddSubtask = (e) => {
        e.preventDefault();
        if (!subtaskText) return;
        onAddSubtask(task.id, subtaskText);
        setSubtaskText('');
    };

    const handleEdit = (e) => {
        e.preventDefault();
        onEditTask(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <li className={task.completed ? 'completed' : ''}>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggleTask(task.id)} 
            />
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <input 
                        type="text" 
                        value={editedText} 
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    {task.text}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            <p>Due: {task.dueDate}</p>
            <p>Category: {task.category}</p>
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
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default Task;
