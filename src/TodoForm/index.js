import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        setmodalEdit,
        formData,
        setFormData,
    } = React.useContext(TodoContext);

    const [newName, setnewName] = React.useState('');
    const [newDescription, setnewDescription] = React.useState('');
    const [newDealine, setnewDealine] = React.useState('');
    const [newCategory, setnewCategory] = React.useState('');

    React.useEffect(() => {
        if (formData) {
            setnewName(formData.name);
            setnewDescription(formData.description);
            setnewDealine(formData.dealine);
            setnewCategory(formData.category);
        }
    }, [formData]);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newName, newDescription, newDealine, newCategory);
        reset();
    }

    const onCancel = () => {
        reset();
    }

    const reset = () => {
        setmodalEdit(false);
        setOpenModal(false);
        setFormData(null);
    }

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
                disabled={formData ? true : false}
            />

            <textarea className='TodoForm-textArea' placeholder='Describa aquí tu nueva tarea'
                value={newDescription}
                onChange={(event) => handleInputChange(event, setnewDescription)}
                required
            />
            <input className='TodoForm-input'
                type="date"
                value={newDealine}
                onChange={(event) => handleInputChange(event, setnewDealine)}
                required
            />
            <select className='TodoForm-select'
                value={newCategory}
                onChange={(event) => handleInputChange(event, setnewCategory)}
                required
            >
                <option value="">Select categories</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
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