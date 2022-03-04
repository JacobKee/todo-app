import React, { useState } from 'react';
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = []
  Object.keys(localStorage).sort().forEach(function (key) {
    var todo = {
      key: key,
      text: localStorage.getItem(key)
    }

    todos.push(todo)
  });

  return (
    <div className="App">
      <h1 className="todo-title">To Do List </h1>
      <div>
        <div className='todo-app'>
          <TodoList todos={todos}></TodoList>
        </div>
      </div>
    </div>
  );

}

export default App;
