import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {

    const completed = props.completed;
    const name = props.name;
    const text = props.text;
    const dealine = props.dealine;
    const category = props.category;

    const handleEdit = () => {
        props.setFormData({
            name: name,
            description: text,
            dealine: dealine,
            category: category
        });
    };

    return (
        <li
            className={`TodoItem ${completed && "TodoItem--complete"} ${props.modalEdit && "TodoItem--edit"}`}
            onClick={handleEdit}
        >

            <p className={`TodoItem-title ${completed && "TodoItem-p--complete"}`}>
                {name}
            </p>

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <div className='TodoItem-group'>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"} TodoItem-border TodoItem-border-${category}`}>
                    {category}
                </p>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {dealine}
                </p>
            </div>
            <CompleteIcon
                completed={completed}
                onComplete={props.onComplete}
            />

            <EditIcon
                setOpenModal={props.setOpenModal}
                setmodalEdit={props.setmodalEdit}
                handleEdit={handleEdit}
            />

            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };