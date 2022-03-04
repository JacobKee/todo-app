import React, { useState } from 'react';
import "./css/TodoForm.css";

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            key: Date.now(),
            text: input
        });
        setInput('');
    };


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
        <div className='todo-div' >
            <input
                className='todo-forminput'
                placeholder="Add To-Do!"
                value={input}
                name="text"
                onChange={handleChange}
            />
        </div>
        </form>
    );
}

export default TodoForm;
