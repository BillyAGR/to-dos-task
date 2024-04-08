import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoChart } from '../TodoChart';
import { FaListCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import './TodoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
        setSearchValue,
    } = React.useContext(TodoContext);

    const todo = totalTodos - completedTodos;
    const completedAllTasks = totalTodos === completedTodos;
    const message = completedAllTasks ?
        <div className="TodoCounter-chart--item"> <h2><span>¡Felicidades!</span> Has completado todas las tareas</h2> </div> :
        <section className="TodoCounter">
            <div className="TodoCounter-chart">
                <TodoChart />
                <h2 className='TodoCounter-chart--item'>Has completado <span>{completedTodos}</span> de <span> {totalTodos}</span> tareas.</h2>
            </div>
            <div className='TodoCounter-indicator'>
                <span
                    className='TodoCounter-indicator--item'
                    onClick={
                        () => {
                            setSearchValue('');
                        }
                    }
                > <FaListCheck /> Total: {totalTodos}</span>
                <span
                    className='TodoCounter-indicator--item'
                    onClick={
                        () => {
                            setSearchValue(false);
                        }
                    }
                > <FaRegCircleCheck /> To Do's: {todo}</span>
                <span
                    className='TodoCounter-indicator--item'
                    onClick={
                        () => {
                            setSearchValue(true);
                        }
                    }
                ><FaCircleCheck />  completed: {completedTodos}</span>
            </div>
        </section>
    return message;
}

export { TodoCounter };
