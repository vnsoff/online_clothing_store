import React from 'react';

function ProductCard({ product }) {
  if (!product || !product.image) {
    return null; // Render nothing if product or image is not available.
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600">Add to Cart</button>
    </div>
  );
}


export default ProductCard;