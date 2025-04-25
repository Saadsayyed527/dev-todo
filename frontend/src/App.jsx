import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItems';
import TodoForm from './components/TodoForm';

const API_URL = 'http://localhost:5000/api/todos'; // Replace with EC2 IP in production

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async (title) => {
    const res = await axios.post(API_URL, { title });
    setTodos([...todos, res.data]);
  };

  const toggleComplete = async (id, completed) => {
    const res = await axios.put(`${API_URL}/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App" style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
