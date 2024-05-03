import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, setFormData }) {
    return (
        <div className='CreateTodoButton'>
            <button
                className="CreateTodoButton-button"
                onClick={
                    () => {
                        setOpenModal(state => !state);
                        setFormData(null);
                    }
                }
            >+</button>
        </div>
    );
}

export { CreateTodoButton };