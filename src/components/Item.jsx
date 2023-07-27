import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function Item({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;
  const [check, setCheck] = useState(false);
  const handleChange = (e) => {
    setCheck(e.target.checked);
    onUpdate({ ...todo, status: check ? 'active' : 'completed' });
  };
  const handleClick = () => {
    onDelete(todo);
  };
  return (
    <li>
      <input type='checkbox' checked={check} onChange={handleChange} />
      <strong>{text}</strong>
      <button onClick={handleClick}>
        <BsTrash />
      </button>
    </li>
  );
}
