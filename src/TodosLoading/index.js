import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-completeIcon" />
            <span className="LoadingTodo-editIcon" />
            <span className="LoadingTodo-deleteIcon" />
        </div>
    );
}

export { TodosLoading };