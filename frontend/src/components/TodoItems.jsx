import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem',
        background: '#f4f4f4',
        marginBottom: '0.5rem'
      }}
    >
      <span
        onClick={() => toggleComplete(todo._id, todo.completed)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flexGrow: 1
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo._id)} style={{ marginLeft: '1rem' }}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
