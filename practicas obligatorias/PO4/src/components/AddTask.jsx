import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Agregar nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddTask;
