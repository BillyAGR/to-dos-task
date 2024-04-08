import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoGroup.css';


function TodoGroup() {
    const {
        setSearchValue,
    } = React.useContext(TodoContext);

    return (
        <div className='TodoGroup'>
            <button
                className='TodoGroup-button'
                onClick={
                    () => {
                        setSearchValue('');
                    }
                }
            >All

            </button>
            <button
                className='TodoGroup-button TodoGroup-button--home'
                onClick={
                    () => {
                        setSearchValue('home');
                    }
                }
            >Home
            </button>
            <button
                className='TodoGroup-button TodoGroup-button--work'
                onClick={
                    () => {
                        setSearchValue('work');
                    }
                }
            >Work
            </button>
            <button
                className='TodoGroup-button TodoGroup-button--personal'
                onClick={
                    () => {
                        setSearchValue('personal');
                    }
                }
            >Personal
            </button>
        </div>
    );
}

export { TodoGroup };