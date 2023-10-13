import React from 'react';
import Header from '../components/Header'; // Import the Header component
import ProductListing from '../components/ProductListing';
import 'tailwindcss/tailwind.css';

function WomenPage() {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <ProductListing selectedCategory="Women" />
    </div>
  );
}

export default WomenPage;