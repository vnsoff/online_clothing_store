// components/Product.js

import React, { useEffect, useState } from 'react';

const Product = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the category parameter
    // For example, you can make an API call to retrieve products.
    fetch(`/api/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
