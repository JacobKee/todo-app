import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList(props) {
    const [todos, setTodos] = useState(props.todos != [] ? props.todos : []);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        } else {
            localStorage.setItem(todo.key, todo.text);
            const newTodos = [...todos,todo];
            setTodos(newTodos);
        }
    };

    const updateTodo = (text, key) => {
        if (!text || /^\s*$/.test(text)) {
            return;
        } else {
            const newTodos = [...todos];
            newTodos.map(item => {
                if (item.key === key) {
                    item.text = text;
                    localStorage.setItem(key, text);
                }
            })
            setTodos(newTodos);
        }
    }

    const deleteTodo = (key) => {
        localStorage.removeItem(key);
        const newTodos = todos.filter(item =>
            item.key !== key);
        setTodos(newTodos);
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
        
    );
}

export default TodoList;
