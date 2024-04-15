import React from 'react';
import { FaUser, FaSun, FaMoon } from "react-icons/fa6";
import './TodoUser.css';


function TodoUser() {

    return (
        <div className='TodoUser'>
            <button className='TodoUser-button TodoUser-botton-sun'   color='black' >
                <FaSun />
            </button>
            <button className='TodoUser-button' >
                <FaUser />
            </button> 
            {/* <button className='TodoUser-button'>
                <FaMoon />
            </button> */}

        </div>
    );
}

export { TodoUser };