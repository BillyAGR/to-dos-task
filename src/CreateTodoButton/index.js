import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <div className='CreateTodoButton'>
            <button
                className="CreateTodoButton-button"
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }
            >+</button>
        </div>
    );
}

export { CreateTodoButton };