import React from 'react';
import { TodoContext } from '../TodoContext';
import { FaSistrix } from "react-icons/fa6";
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    const getSearchValue = () => {

        if (typeof searchValue === 'boolean') {
            return '';
        }

        if (searchValue === 'home') {
            return '';
        }

        if (searchValue === 'work') {
            return '';
        }

        if (searchValue === 'personal') {
            return '';
        }

        return searchValue;

    }

    return (
        <span className='TodoSearchBox'>
            <input
                placeholder="Buscar tareas"
                className="TodoSearch"
                // value={typeof searchValue !== 'boolean' ? searchValue : ''}
                value={typeof searchValue !== 'boolean' && !['home', 'work', 'personal'].includes(searchValue) ? searchValue : ''}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <FaSistrix className="TodoSearch-icon" />
        </span>
    );
}

export { TodoSearch };