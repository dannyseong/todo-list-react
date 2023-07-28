import { BsTrash } from 'react-icons/bs';

export default function Item({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleClick = () => {
    onDelete(todo);
  };
  return (
    <li>
      <input
        type='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <strong>{text}</strong>
      <button onClick={handleClick}>
        <BsTrash />
      </button>
    </li>
  );
}
