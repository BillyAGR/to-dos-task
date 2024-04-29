import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
    return (
        <p className='EmptyTodos'>You don't have any tasks yet
        Click on the + button to add one</p>
    );
}

export { EmptyTodos };