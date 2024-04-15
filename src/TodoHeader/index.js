import React from 'react';
import { TodoGroup } from '../TodoGroup';
import { TodoUser } from '../TodoUser';
import './TodoHeader.css';

function TodoHeader() {
    return (
        <header className='TodoHeader'>
            <h1 className='TodoHeader-tile'>
                To Do's <span className='TodoHeader-color'>Task</span>
                <TodoUser />
            </h1> 
            <TodoGroup />
        </header>
    );
}

export { TodoHeader };