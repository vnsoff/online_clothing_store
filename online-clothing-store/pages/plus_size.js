// pages/plus_size.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

function Plus_SizePage() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className='mb-16'>
      <ProductListing selectedCategory="plus_size" />
      </div>
      <Footer />
    </div>
  );
}

export default Plus_SizePage;