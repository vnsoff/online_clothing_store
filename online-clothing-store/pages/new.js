// pages/new.js

import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

function NewPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className='mb-16'>
      <ProductListing selectedCategory="new" />
      </div>
      <Footer />
    </div>
  );
}

export default NewPage;