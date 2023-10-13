// pages/women.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Breadcrumbs from '../components/Breadcrumbs';

function WomenPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className="text-center text-4xl font-bold py-4">Women's Products</div>
      <ProductListing selectedCategory="women" />
    </div>
  );
}

export default WomenPage;