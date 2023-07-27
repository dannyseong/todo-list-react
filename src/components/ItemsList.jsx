import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

export default function ItemsList() {
  const [todos, setTodos] = useState([
    { id: '01', text: 'coding study', status: 'active' },
    { id: '02', text: 'commit study notes', status: 'active' },
    { id: '03', text: 'WIL meeting', status: 'active' },
    { id: '04', text: 'taking care of Eugene', status: 'active' },
  ]);
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), text, status: 'active' }]);
    setText('');
  };
  const handleClickDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const handleClickUpdate = (updated) => {
    setTodos(
      todos.map((t) => {
        if (t.id === updated.id) {
          return updated;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onDelete={handleClickDelete}
            onUpdate={handleClickUpdate}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add Todo..'
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
