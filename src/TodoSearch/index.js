import React from 'react';
import { TodoContext } from '../TodoContext';
import { FaSistrix } from "react-icons/fa6";
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return (

        <span className='TodoSearchBox'>
            <input
                placeholder="Buscar tareas"
                className="TodoSearch"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <FaSistrix  className="TodoSearch-icon"/>
        </span>
    );
}

export { TodoSearch };
