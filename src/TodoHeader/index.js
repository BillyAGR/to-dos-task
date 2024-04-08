import React from 'react';
import { TodoGroup } from '../TodoGroup';
import './TodoHeader.css';

function TodoHeader() {
    return (
        <header className='TodoHeader'>
            <h1>To Do's <span className='TodoHeader-color'>Task</span></h1>
            <TodoGroup />
        </header>
    );
}

export { TodoHeader };