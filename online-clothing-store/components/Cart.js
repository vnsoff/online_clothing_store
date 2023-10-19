// components/Cart.js

import React, { useState, useEffect } from 'react';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';

function Cart() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([]);

  // Fetch the cart items from a server
  useEffect(() => {
    // Simulated fetch
    // Example: fetch('/api/cart').then((response) => response.json())
    // .then((data) => setCartItems(data));

    const exampleCartData = [
      { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    ];

    setCartItems(exampleCartData);
  }, []);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <CartSummary cartItems={cartItems} />
      <CheckoutButton />
    </div>
  );
}

export default Cart;