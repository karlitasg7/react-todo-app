import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = () => {
        alert('Open modal');
    };

    return (
        <button
            className='CreateTodoButton'
            onClick={onClickButton}
        >

            +

        </button>
    );
}

export { CreateTodoButton };