//components/Trends.js

import React, { useState } from 'react';
import CategorySelection from '../components/CategorySelection';
import ProductListing from '../components/ProductListing';

function Trends() {
  const [selectedCategory, setSelectedCategory] = useState('Trends');

  return (
    <div>
      <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductListing selectedCategory={selectedCategory} />
    </div>
  );
}

export default Trends;