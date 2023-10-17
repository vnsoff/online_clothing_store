//components/New.js

import React, { useState } from 'react';
import CategorySelection from '../components/CategorySelection';
import ProductListing from '../components/ProductListing';

function New() {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <div>
      <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductListing selectedCategory={selectedCategory} />
    </div>
  );
}

export default New;