//components/ProductCard.js

import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;