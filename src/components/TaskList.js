import React from 'react';
import './TaskList.css'; // Make sure to create a corresponding CSS file

function TaskList() {
    // For demonstration, using static data. Eventually, this will come from state or props.
    const tasks = [
        { id: 1, text: 'Complete React project' },
        { id: 2, text: 'Read about Redux' },
        { id: 3, text: 'Workout for 30 minutes' }
    ];

    return (
        <div className="task-list">
            <h2>My Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
