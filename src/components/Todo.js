import React, { useState } from "react";
import "./css/Todo.css";

function Todo(props) {

    return props.todos.map((todo, index) => (
        <div className="todo-div" key={index}>
            <label className="checkbox">
                <input type="checkbox" className="todo-checkbox" />
                <span></span>
            </label>
            <input
                className="todo-input"
                value={todo.text}
                name="text"
                onChange={(e) => {
                    props.updateTodo(e.target.value, todo.key)
                }}
            />
            <span className="todo-delete" onClick={() => props.deleteTodo(todo.key)}>
                x
            </span>
        </div>
    ));
}

export default Todo;
