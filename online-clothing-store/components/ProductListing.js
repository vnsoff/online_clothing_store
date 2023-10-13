//ProductListing.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductListing({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For now, placeholder products for testing:
    setProducts([
      { id: 1, name: 'Product 1', price: 29.99, image: '/images/product_image.svg' },
      { id: 2, name: 'Product 2', price: 39.99, image: '/images/product_image.svg' },
      { id: 3, name: 'Product 3', price: 9.99, image: '/images/product_image.svg' },
      { id: 4, name: 'Product 4', price: 19.99, image: '/images/product_image.svg' },
      { id: 5, name: 'Product 5', price: 39.99, image: '/images/product_image.svg' },
      { id: 6, name: 'Product 6', price: 49.99, image: '/images/product_image.svg' },
      { id: 7, name: 'Product 7', price: 79.99, image: '/images/product_image.svg' },
      { id: 8, name: 'Product 8', price: 59.99, image: '/images/product_image.svg' },
      { id: 9, name: 'Product 9', price: 39.99, image: '/images/product_image.svg' },
      { id: 10, name: 'Product 10', price: 39.99, image: '/images/product_image.svg' },
    ]);
  }, [selectedCategory]);

  return (
    <div className="flex mt-4">
      {/* Left side component (e.g., filters or categories) with margin */}
      <div className="w-1/3 p-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          Filters
        </div>
      </div>

      {/* Right side grid of products with margin */}
      <div className="w-2/3 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
