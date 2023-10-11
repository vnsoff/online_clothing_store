import React, { useState } from 'react';
import CategorySelection from '../components/CategorySelection';
import ProductListing from '../components/ProductListing';

function Women() {
  const [selectedCategory, setSelectedCategory] = useState('Women');

  return (
    <div>
      <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductListing selectedCategory={selectedCategory} />
    </div>
  );
}

export default Women;