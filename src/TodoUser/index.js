import React, { useEffect, useState } from 'react';
import { FaUser, FaSun, FaMoon } from "react-icons/fa6";
import { TodoContext } from '../TodoContext';

import './TodoUser.css';

function TodoUser() {
    const [theme, setTheme] = useState(getInitialTheme());
    const {
        setOpenModal,
        setAboutOf,
    } = React.useContext(TodoContext);
    
    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('selected-theme', theme);
    }, [theme]);

    function getInitialTheme() {
        const selectedTheme = localStorage.getItem('selected-theme');
        return selectedTheme || 'light';
    }

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className='TodoUser'>
            <button
                className='TodoUser-button TodoUser-botton-sun'
                onClick={toggleTheme}>
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
            <button
                className='TodoUser-button'
                onClick={
                    () => {
                        setOpenModal(state => !state);
                        setAboutOf(state => !state);
                    }
                } >
                <FaUser />
            </button>
        </div>
    );
}

export { TodoUser };
