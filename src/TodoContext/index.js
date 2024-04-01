import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    console.log('todos', todos);
    console.log('saveTodos', saveTodos);

    const searchedTodos = todos.filter(
        (todo) => {
            const noTildes = (text) => {
                return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            };
            const todoText = noTildes(todo.text.toLowerCase());
            const searchText = noTildes(searchValue.toLowerCase());
            return todoText.includes(searchText);
        }
    );

    const addTodo = (name, text, dealine, category) => {
        const newTodos = [...todos];
        newTodos.push({
            name,
            text,
            dealine,
            category,
            completed: false,
        });

        // console.log(newTodos);
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };