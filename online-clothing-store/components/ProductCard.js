//components/ProductCard.js

import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border p-2">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;