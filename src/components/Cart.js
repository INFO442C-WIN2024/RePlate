import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext'; // Import your custom cart context
import './Cart.css'; // Import your styling
import { couponList } from '../data/restaurants'

const Cart = () => {
  // Use hooks and initialize constants at the top of your component
  const { cart, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize the useNavigate hook here
  const [discountInput, setDiscountInput] = useState("")
  const [discount, setDiscount] = useState(0)
  // Function to handle the navigation to the checkout page
  const handleCheckout = () => {
    navigate('/checkout'); // Redirects to the Checkout page
  }

  // If the cart is empty, show an empty cart message
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  const checkCoupon = () => {
    let isSet = false
    couponList.forEach(element => {
      if (element.key == discountInput) {
        setDiscount(element.value)
        isSet = true
      }
    });
    if (!isSet) {
      setDiscount(0)
    }
  }

  const convertToPercentage = (value) => {
    return (value * 100) + '%';
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
          <span Style="margin-left: auto;">${getTotal().toFixed(2) ? (discount == 0 ? 1 : discount) * getTotal().toFixed(2) : '-'}</span>
          <span Style="margin-left: 10px; color: #666;  font-size: 14px;"
            style={{
              display: discount == 0 ? 'none' : ""
            }}
          >- {convertToPercentage(discount)}</span>
        </div>
        <div class="coupon-form">
          <span>Coupon:</span>
          <input class="coupon-input" value={discountInput}
            onChange={e => { setDiscountInput(e.target.value) }}
          ></input>
          <button
            onClick={checkCoupon}
          >
            Check
          </button>
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
