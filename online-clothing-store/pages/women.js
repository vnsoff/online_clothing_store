// pages/women.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

function WomenPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className='mb-16'>
      <ProductListing selectedCategory="women" />
      </div>
      <Footer />
    </div>
  );
}

export default WomenPage;