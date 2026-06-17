import { useState } from "react";

function TodoForm({ tambahTodo }) {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    tambahTodo(input);

    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Masukkan kegiatan"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;
