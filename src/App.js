import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (event) => {
    if (event.key === "Enter" && todoInput !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={handleAddTodo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
