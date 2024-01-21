import React from 'react';
import './TaskList.css'; 
import Task from './Task';

function TaskList({ tasks, onToggleTask, onAddSubtask }) {
    return (
        <div className="task-list">
            <h2>Active Tasks</h2>
            <ul>
                {tasks.filter(task => !task.completed).map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onToggleTask={onToggleTask} 
                        onAddSubtask={onAddSubtask} 
                    />
                ))}
            </ul>
            <h2>Completed Tasks</h2>
            <ul>
                {tasks.filter(task => task.completed).map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onToggleTask={onToggleTask} 
                        onAddSubtask={onAddSubtask} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
