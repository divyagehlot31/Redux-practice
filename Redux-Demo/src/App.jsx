import React from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Product Filter</h2>
      <Filter />
      <ProductList />
    </div>
  );
};

export default App;
