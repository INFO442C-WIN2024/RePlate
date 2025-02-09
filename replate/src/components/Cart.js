import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext'; // Import your custom cart context
import './Cart.css'; // Import your styling

const Cart = () => {
  // Use hooks and initialize constants at the top of your component
  const { cart, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize the useNavigate hook here

  // Function to handle the navigation to the checkout page
  const handleCheckout = () => {
    navigate('/checkout'); // Redirects to the Checkout page
  };

  // If the cart is empty, show an empty cart message
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  // Render the cart items and summary
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <button onClick={clearCart} className="clear-cart">
          Clear Cart
        </button>
        {/* Attach the handleCheckout function to the button */}
        <button onClick={handleCheckout} className="checkout-button">
          Proceed to Checkout
        </button>
      </div>
      
      <Link to="/" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
