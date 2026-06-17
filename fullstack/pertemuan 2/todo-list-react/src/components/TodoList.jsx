function TodoList({ todos, hapusTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <button onClick={() => hapusTodo(todo.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
