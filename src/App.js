import { useState } from 'react';
import Header from './components/Header';
import ItemsList from './components/ItemsList';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState('all');
  return (
    <>
      <Header filter={filter} filters={filters} setFilter={setFilter} />
      <ItemsList filter={filter} />
    </>
  );
}

export default App;
