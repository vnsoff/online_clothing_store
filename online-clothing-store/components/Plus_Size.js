//components/Plus_Size.js

import React, { useState } from 'react';
import CategorySelection from './CategorySelection';
import ProductListing from './ProductListing';

function Plus_Size() {
  const [selectedCategory, setSelectedCategory] = useState('Plus_Size');

  return (
    <div>
      <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductListing selectedCategory={selectedCategory} />
    </div>
  );
}

export default Plus_Size;