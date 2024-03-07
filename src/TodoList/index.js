import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoList.css';


function TodoList({ children }) {

    const {
        openModal,
    } = React.useContext(TodoContext);
    const setWidht = {
        false: 'percent',
        true: 'flexible' 
    };

    return (
        <ul className={`TodoList Todo-list-hundred--${setWidht[openModal]}`}>
            {children}
        </ul>
    );
}

export { TodoList };