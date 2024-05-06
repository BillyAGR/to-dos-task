import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, setFormData }) {
    return (
        <div className='CreateTodoButton'>
            <button
                className="CreateTodoButton-button"
                onClick={
                    () => {
                        console.log('setFormData', setFormData);
                        setOpenModal(state => !state);
                        setFormData({});
                    }
                }
            >+</button>
        </div>
    );
}

export { CreateTodoButton };