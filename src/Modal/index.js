import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, modalEdit }) {


    return ReactDOM.createPortal(
        <div
            className={`ModalBackground ${modalEdit && "ModalBackground-empty"}`}
        >
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };