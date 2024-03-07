import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    // console.log('button create', setOpenModal);
    return (
        <button
            className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >+</button>
    );
}

export { CreateTodoButton };