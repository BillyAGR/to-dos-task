import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type='check'
            color={ completed ? 'yellow' : 'white' }
            onClick={ onComplete }
        />
    )
}

export { CompleteIcon };