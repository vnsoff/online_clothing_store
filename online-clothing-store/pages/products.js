// pages/products.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import CategorySelection from '../components/CategorySelection';

function Products() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <CategorySelection
        categories={['Women', 'Men', 'Trends', 'New', 'Plus Size', 'Brands']}
        onSelectCategory={(selectedCategory) => router.push(`/products/${selectedCategory}`)}
      />
      <ProductListing selectedCategory={currentCategory} />
    </div>
  );
}

export default Products;