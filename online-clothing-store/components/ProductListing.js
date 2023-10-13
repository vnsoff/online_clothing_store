//components/ProductListing.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 

function ProductListing({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For now, placeholder products for testing:
    setProducts([
      { id: 1, name: 'Product 1', price: 29.99, image: '/images/product_image.png' },
      { id: 2, name: 'Product 2', price: 39.99, image: '/images/product_image.png' },
      { id: 3, name: 'Product 3', price: 39.99, image: '/images/product_image.png' },
      { id: 4, name: 'Product 4', price: 39.99, image: '/images/product_image.png' },
      { id: 5, name: 'Product 5', price: 39.99, image: '/images/product_image.png' },
    ]);
  }, [selectedCategory]);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;