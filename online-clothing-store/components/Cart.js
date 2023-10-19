import React, { useState, useEffect } from 'react';
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';

function Cart() {
  // Initialize cart with an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product, quantity) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item already exists, update the quantity
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });

      setCartItems(updatedCart);
    } else {
      // If it's a new item, add it to the cart
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

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
