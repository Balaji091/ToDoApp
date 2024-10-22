import React from 'react';

function Tasks({ task, index, toggleRead, deleteTask }) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.isRead}
          onChange={toggleRead}
        />
        <span
          style={{ 
            textDecoration: task.isRead ? 'line-through' : 'none',
            marginLeft: '10px'
          }}
        >
          {task.text}
        </span>
      </label>
      <button className="delete-btn" onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Tasks;
