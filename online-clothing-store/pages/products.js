// pages/products.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import CategorySelection from '../components/CategorySelection';

function Products() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Header />
      <CategorySelection
        categories={['Women', 'Men', 'Trends', 'New', 'Plus Size', 'Brands']}
        onSelectCategory={(selectedCategory) => router.push(`/products?category=${selectedCategory}`)}
      />
      <ProductListing selectedCategory={category} />
    </div>
  );
}

export default Products;