import React from 'react';
import { TodoIcon } from './';

function EditIcon({ setOpenModal }) {
    // console.log('edit create', setOpenModal);
    return (
        <TodoIcon
            type='edit'
            color='gray'
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        />
    )
}

export { EditIcon };