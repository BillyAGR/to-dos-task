import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import { FaCirclePlus, FaPen } from "react-icons/fa6";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        modalEdit,
        setmodalEdit,
        formData,
        setFormData,
    } = React.useContext(TodoContext);

    const [newName, setnewName] = React.useState('');
    const [newDescription, setnewDescription] = React.useState('');
    const [newDealine, setnewDealine] = React.useState('');
    const [newCategory, setnewCategory] = React.useState('');
    const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
        }, 0.4);

        return () => clearTimeout(timer);
    }, []);

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
        <form className={`TodoForm ${expanded ? 'TodoForm-expand' : ''}`} onSubmit={onSubmit}>
            <div className='TodoForm-icon'>
                {modalEdit ? <FaPen /> : <FaCirclePlus />}
            </div>
            <label
                className='TodoForm-label'
                id='FormTitle'> Write a new or modified task.
            </label>
            <input
                className='TodoForm-input'
                placeholder='Name of the taks'
                value={newName}
                onChange={(event) => handleInputChange(event, setnewName)}
                required
                disabled={formData ? true : false}
                id='FormName'
            />
            <textarea
                className='TodoForm-textArea'
                placeholder='Describe the new taks here.'
                value={newDescription}
                onChange={(event) => handleInputChange(event, setnewDescription)}
                required
                id='FormDescription'
            />
            <input
                className='TodoForm-input'
                type="date"
                value={newDealine}
                onChange={(event) => handleInputChange(event, setnewDealine)}
                required
                id='FormDate'
            />
            <select
                className='TodoForm-select'
                value={newCategory}
                onChange={(event) => handleInputChange(event, setnewCategory)}
                required
                id='FormCategories'
            >
                <option value="">Select categories</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
            <div className='TodoForm-buttonContainer' id='FormButtons'>
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