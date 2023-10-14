// pages/men.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

function MenPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className='mb-16'>
      <ProductListing selectedCategory="men" />
      </div>
      <Footer />
    </div>
  );
}

export default MenPage;