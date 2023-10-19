// components/CartSummary.js

import React from 'react';

function CartSummary({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border-t p-4">
      <p className="text-lg font-semibold">Cart Summary</p>
      <div className="flex justify-between items-center mt-4">
        <p>Total Price:</p>
        <p className="text-xl">${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartSummary;
