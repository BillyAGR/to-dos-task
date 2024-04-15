import React from 'react';
import { TodoContext } from '../TodoContext';
import { FaSistrix } from "react-icons/fa6";
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    }; 

    return (
        <span className='TodoSearchBox'>
            <input
                placeholder="Find task"
                className="TodoSearch"
                value={isFocused === true && typeof searchValue !== 'boolean' ? searchValue : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <FaSistrix className="TodoSearch-icon" />
        </span>
    );
}

export { TodoSearch };