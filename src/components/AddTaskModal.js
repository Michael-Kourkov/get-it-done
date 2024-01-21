import React, { useState } from 'react';

function AddTaskModal({ isOpen, onClose, onAddTask }) {
    const [taskText, setTaskText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('green');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText) return;
        onAddTask(taskText, dueDate, time, category, priority); // Include 'time' here
        setTaskText('');
        setDueDate('');
        setTime(''); // Reset time as well
        setCategory('');
        setPriority('green');
        onClose();
    };
    

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter a new task" 
                        value={taskText} 
                        onChange={(e) => setTaskText(e.target.value)}
                    />
                    <input 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]} 
                        value={dueDate} 
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">No category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="other">Other</option>
                    </select>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                    </select>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    );
}

export default AddTaskModal;