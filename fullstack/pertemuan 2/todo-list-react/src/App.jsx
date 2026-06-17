import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const tambahTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
      },
    ]);
  };

  const hapusTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List React</h1>

      <TodoForm tambahTodo={tambahTodo} />

      <TodoList todos={todos} hapusTodo={hapusTodo} />
    </div>
  );
}

export default App;
