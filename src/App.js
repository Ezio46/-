import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

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

  const handleEditTodo = (index) => {
    setEditIndex(index);
  };

  const handleSaveTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
    setEditIndex(-1);
  };

  const saveEnter = (e, index) => {
    if (e.key === "Enter") {
      handleSaveTodo(index, e.target.value);
    }
  };

  const handleInputChange = (e, index) => {
    setTodos([
      ...todos.slice(0, index),
      e.target.value,
      ...todos.slice(index + 1),
    ]);
  };

  const formList = todos.map((todo, index) => (
    <li key={index}>
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={todo}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={saveEnter}
          />
          <button onClick={handleSaveTodo}>Save</button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button onClick={handleEditTodo.bind(null, index)}>Edit</button>
          <button onClick={handleDeleteTodo}>Delete</button>
        </>
      )}
    </li>
  ));

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={handleChange}
        onKeyDown={handleAddTodo}
        id="two"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>{formList}</ul>
    </div>
  );
}

export default App;
