import React, { useState } from "react";
import TodoItem from "./TodoItem";

let array = [
  {
    id: 1,
    message: "Learn React",
    completed: true,
  },
  {
    id: 2,
    message: "Learn Node.js",
    completed: true,
  },
  {
    id: 3,
    message: "Learn Python",
    completed: true,
  },
  {
    id: 4,
    message: "Learn Java",
    completed: true,
  },
  {
    id: 5,
    message: "Learn Express.js",
    completed: true,
  },
];

const TodoInput = () => {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState(array);
  const [filter, setFilter] = useState("all");

  const handleTodo = () => {
    const payload = {
      id: Date.now(),
      message,
      completed: false,
    };
    setTodos([...todos, payload]);
    setMessage("");
  };

  const handleUpdateTodo = (id) => {
    let updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodo);
  };

  const handleDelete = (id) => {
    let deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") {
      return todo.completed;
    } else if (filter === "Uncompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <label>Add Todo</label>
          <input
            type="text"
            placeholder="Add Input over here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleTodo}>Add Todo</button>
        </div>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
      <TodoItem
        todos={filteredTodos}
        onUpdateTodo={handleUpdateTodo}
        handleRemove={handleDelete}
      />
    </div>
  );
};

export default TodoInput;
