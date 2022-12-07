import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (newTodoValue.trim() === '') {
            return;
        }

        addTodo(newTodoValue.trim());
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder=""
                autoFocus
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
