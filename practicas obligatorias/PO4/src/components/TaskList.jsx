import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgray' : 'black' }}>
                    {task.text}
                    <button onClick={() => toggleComplete(task.id)}>
                        {task.completed ? 'Desmarcar' : 'Completar'}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Borrar</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
