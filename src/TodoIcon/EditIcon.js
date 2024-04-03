import React from 'react';
import { TodoIcon } from './';

function EditIcon({ setOpenModal, setmodalEdit, handleEdit }) {
    return (
        <TodoIcon
            type='edit'
            color='white'
            onClick={
                () => {
                    setOpenModal(state => !state);
                    setmodalEdit(state => !state);
                    handleEdit();
                }
            }
        />
    )
}

export { EditIcon };