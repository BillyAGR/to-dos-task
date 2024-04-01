import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    const [newName, setnewName] = React.useState('');
    const [newDescription, setnewDescription] = React.useState('');
    const [newDealine, setnewDealine] = React.useState('');
    const [newCategory, setnewCategory] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('newTodoValue', newTodoValue);
        addTodo(newName, newDescription, newDealine, newCategory);
        console.log('addTodo', addTodo);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    // const onChange = (event) => {
    //     // console.log(event.target.value);
    //     setnewDescription(event.target.value);
    // }

    // const onChange2 = (event) => {
    //     // console.log(event.target.value);
    //     setnewName(event.target.value);
    // }

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    }

    return (
        <form className='TodoForm' onSubmit={onSubmit}>
            <label className='TodoForm-label'> Escribe tu nuevo Task</label>
            <input className='TodoForm-input' placeholder='Nombre de la tarea'
                value={newName}
                onChange={(event) => handleInputChange(event, setnewName)}
                required
            />

            <textarea className='TodoForm-textArea' placeholder='Describa aquí tu nueva tarea'
                value={newDescription}
                onChange={(event) => handleInputChange(event, setnewDescription)}
                required
            />
            <input className='TodoForm-input'
                type="date"
                name="fechaNacimiento"
                value={newDealine}
                onChange={(event) => handleInputChange(event, setnewDealine)}
                required
            />
            <select className='TodoForm-select'
                name="pais"
                value={newCategory}
                onChange={(event) => handleInputChange(event, setnewCategory)}
                required
            >
                <option value="">Selecciona un país</option>
                <option value="colombia">Colombia</option>
                <option value="mexico">México</option>
                <option value="argentina">Argentina</option>
            </select>
            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button--add'>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };