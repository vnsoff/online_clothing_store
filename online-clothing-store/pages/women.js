//pages/women.js

import React from 'react';
import CategorySelection from '../components/CategorySelection';
import ProductListing from '../components/ProductListing';
import 'tailwindcss/tailwind.css';

function WomenPage() {
  return (
    <div>
      <CategorySelection selectedCategory="Women" />
      <ProductListing selectedCategory="Women" />
    </div>
  );
}

export default WomenPage;
