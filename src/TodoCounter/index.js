import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    const completedAllTasks = totalTodos === completedTodos;
    const message = completedAllTasks ?
    <h1 className="TodoCounter"><span>¡Felicidades!</span> Has completado todas las tareas</h1>:
    <h1 className="TodoCounter">Has completado <span>{ completedTodos }</span> de <span> { totalTodos }</span> tareas.</h1>
    
    return  message;
}

export { TodoCounter };
