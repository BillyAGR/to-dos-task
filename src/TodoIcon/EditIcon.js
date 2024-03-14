import React from 'react';
import { TodoIcon } from './';

function EditIcon({ setOpenModal }) {
    // console.log('edit create', setOpenModal);
    return (
        <TodoIcon
            type='edit'
            color='white'
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        />
    )
}

export { EditIcon };