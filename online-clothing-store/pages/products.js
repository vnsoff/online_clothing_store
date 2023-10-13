// pages/products.js

import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import CategorySelection from '../components/CategorySelection';
import 'tailwindcss/tailwind.css';

function Products() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Header />
      <CategorySelection onSelectCategory={(selectedCategory) => router.push(`/products?category=${selectedCategory}`)} />
      <ProductListing selectedCategory={category} />
    </div>
  );
}

export default Products;