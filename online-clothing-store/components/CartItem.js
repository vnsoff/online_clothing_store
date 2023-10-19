// components/CartItem.js

import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex items-center p-4 border-b">
      {/* Product Image (you can replace 'product-image.jpg' with your actual image source) */}
      <div className="w-20 h-20 bg-gray-300 rounded-md overflow-hidden">
        <img
          src="product-image.jpg"
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-xl font-semibold">{item.name}</p>
        <p className="text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="ml-4 cursor-pointer">
        {/* Replace 'removeProduct' with your actual function to remove the product */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
