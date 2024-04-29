import React from 'react';
import { TodoGroup } from '../TodoGroup';
import { TodoUser } from '../TodoUser';
import './TodoHeader.css';

function TodoHeader() {
    return (
        <header className='TodoHeader'>
            <div className='TodoHeader-title'>
                <h1 className='TodoHeader-title--text'>
                    To Do's <span className='TodoHeader-title--color'>Task</span>
                </h1>
                <TodoUser />
            </div>
            <TodoGroup />

        </header>
    );
}

export { TodoHeader };