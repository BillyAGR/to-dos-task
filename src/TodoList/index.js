import React from 'react';
import './TodoList.css';

function TodoList({ children }) {

    return (
        <ul className='TodoList Todo-list-hundred--percent'>
            {children}
        </ul>
    );
}

export { TodoList };