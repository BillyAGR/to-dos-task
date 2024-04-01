import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    console.log('props', props);
    const completed = props.completed;

    return (
        <li className={`TodoItem ${completed && "TodoItem--complete"}`}>

            <p className={`TodoItem-title ${completed && "TodoItem-p--complete"}`}>
                {props.name}
            </p>

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <div className='TodoItem-group'> 
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {props.category}
                </p>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {props.dealine}
                </p>
            </div> 
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