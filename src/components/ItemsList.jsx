import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ItemsList() {
  const [todos, setTodos] = useState([
    { id: '01', text: 'coding study', status: 'active' },
    { id: '02', text: 'commit study notes', status: 'active' },
    { id: '03', text: 'WIL meeting', status: 'active' },
    { id: '04', text: 'taking care of Eugene', status: 'active' },
  ]);
  const [text, setText] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTodos({...todos, {id: uuidv4(), text, status: 'active' }})
  }
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <form action='post' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add Todo'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </section>
  );
}
