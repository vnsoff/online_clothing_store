//components/Men.js

import React, { useState } from 'react';
import CategorySelection from '../components/CategorySelection';
import ProductListing from '../components/ProductListing';

function Men() {
  const [selectedCategory, setSelectedCategory] = useState('Men');

  return (
    <div>
      <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductListing selectedCategory={selectedCategory} />
    </div>
  );
}

export default Men;