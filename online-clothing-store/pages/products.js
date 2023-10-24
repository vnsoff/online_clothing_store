// pages/products.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import CategorySelection from '../components/CategorySelection';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

function Products() {
  const router = useRouter();
  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === 'Brands') {
      router.push('/brands');
    } else {
      router.push(`/products/${selectedCategory.toLowerCase()}`);
    }
  };

  return (
    <div>
      <Header />
      <CategorySelection
        categories={['Women', 'Men', 'Trends', 'New', 'Plus Size', 'Brands']}
        onSelectCategory={handleCategorySelect}
      />
      <ProductListing />
      <Footer/>
    </div>
  );
}

export default Products;