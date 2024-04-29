import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
import { AboutOf } from '../AboutOf';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        modalEdit,
        setmodalEdit,
        formData,
        setFormData,
        aboutOf,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoHeader />
            <TodoList>
                <TodoCounter />
                <TodoSearch />
                {
                    loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )
                }
                {error && <TodosError />}
                {
                    (!loading && searchedTodos.length === 0) &&
                    <EmptyTodos />
                }
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        name={todo.name}
                        dealine={todo.dealine}
                        category={todo.category}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        setOpenModal={setOpenModal}
                        modalEdit={modalEdit}
                        setmodalEdit={setmodalEdit}
                        formData={formData}
                        setFormData={setFormData}
                    />
                ))
                }
            </TodoList>
            <CreateTodoButton
                setOpenModal={setOpenModal}
                setmodalEdit={setmodalEdit}
            />
            {openModal && (
                <Modal
                    modalEdit={modalEdit}
                >
                    {aboutOf ? <AboutOf /> :
                        <TodoForm
                            formData={formData}
                            setFormData={setFormData}
                        />}
                </Modal>
            )}
        </>
    );
}

export { AppUI };