import React from 'react';

export default function Header({ filters, filter, setFilter }) {
  return (
    <ul>
      {filters.map((item, index) => (
        <li key={index}>
          <button onClick={() => setFilter(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
}
