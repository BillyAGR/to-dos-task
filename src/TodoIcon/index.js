import { FaCheck, FaXmark, FaPen } from "react-icons/fa6";
import './TodoIcon.css'

const iconTypes = {
    check: (color) => <FaCheck
        className="Icon-svg" fill={color} />,
    edit: (color) => <FaPen
        className="Icon-svg" fill={color} />,
    delete: (color) => <FaXmark
        className="Icon-svg" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };