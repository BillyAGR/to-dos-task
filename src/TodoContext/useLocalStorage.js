import React from 'react';

function useLocalStorage(itemName, intialValue) {

    const [item, setItem] = React.useState(intialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(intialValue));
                    parsedItem = intialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, [itemName, intialValue]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Descripción 1', completed: true },
//   { text: 'Detalle 2', completed: false },
//   { text: 'Observación 3', completed: true },
//   { text: 'Lectura 4', completed: false },
//   { text: 'Texto 5', completed: false }
// ]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');