import React, { useState } from 'react';

export default function ItemsList() {
  const [todos, setTodos] = useState([
    { id: '01', text: 'coding study', status: 'active' },
    { id: '02', text: 'commit study notes', status: 'active' },
    { id: '03', text: 'WIL meeting', status: 'active' },
    { id: '04', text: 'taking care of Eugene', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
