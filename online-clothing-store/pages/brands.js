// pages/brands.js

import Link from 'next/link';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

function BrandsPage() {
  const brandsData = [
    { id: 1, name: 'Brand 1' },
    { id: 2, name: 'Brand 2' },
    { id: 3, name: 'Brand 3' },
  ];

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Brands />
      <Footer />
    </div>
  );
}

export default BrandsPage;
