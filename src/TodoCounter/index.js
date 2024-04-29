import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoChart } from '../TodoChart';
import { FaListCheck, FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
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
        <h2 className="TodoCounter-chart--item"><span>Welcome!</span> It's time to do a task.</h2> :
        <h2 className='TodoCounter-chart--item'>You have completed <span>{completedTodos}</span> of <span> {totalTodos}</span> task.</h2>;

    return (<section className="TodoCounter">
        <div className="TodoCounter-chart">
            <TodoChart />
            {message}
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
    </section>);

}

export { TodoCounter };
