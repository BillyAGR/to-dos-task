import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Escribe tu nuevo Task</label>
            <input placeholder='Nombre de la tarea' />

            <textarea placeholder='Describa aquí tu nueva tarea'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <input type="date" name="fechaNacimiento" />
            <select name="pais">
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