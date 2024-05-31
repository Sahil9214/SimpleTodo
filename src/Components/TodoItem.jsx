import React from "react";

const TodoItem = ({ todos, onUpdateTodo, handleRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.message}</span>
          <button onClick={() => onUpdateTodo(todo.id)}>
            {todo.completed ? "Completed" : "Uncompleted"}
          </button>
          <button onClick={() => handleRemove(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
