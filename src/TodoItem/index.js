import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    const completed = props.completed;

    return (
        <li className={`TodoItem ${completed && "TodoItem--complete"}`}>

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>

            <CompleteIcon
                completed={completed}
                onComplete={props.onComplete}
            />

            <EditIcon
                setOpenModal={props.setOpenModal}
            />

            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };