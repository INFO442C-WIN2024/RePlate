import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { couponList } from '../data/restaurants';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [discountInput, setDiscountInput] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  const checkCoupon = () => {
    let isSet = false;
    couponList.forEach(element => {
      if (element.key === discountInput) {
        setDiscount(element.value);
        isSet = true;
      }
    });
    if (!isSet) {
      setDiscount(0);
    }
  };

  const convertToPercentage = (value) => {
    return (value * 100) + '%';
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => {
      const price = item.isDiscounted ? parseFloat(item.discountPrice) : item.price;
      return sum + price;
    }, 0);
  };

  const discountedTotal = getTotalPrice() * (discount === 0 ? 1 : (1 - discount));

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p style={{ textDecoration: item.isDiscounted ? 'line-through' : 'none' }}>
                ${item.price.toFixed(2)}
              </p>
              {item.isDiscounted && (
                <p className="discount-price">Discount Price: ${item.discountPrice}</p>
              )}
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span style={{ marginLeft: 'auto' }}>${discountedTotal.toFixed(2)}</span>
          <span 
            style={{ marginLeft: '10px', color: '#666', fontSize: '14px', display: discount === 0 ? 'none' : 'inline' }}
          >
            - {convertToPercentage(discount)}
          </span>
        </div>
        <div className="coupon-form">
          <span>Coupon:</span>
          <input
            className="coupon-input"
            value={discountInput}
            onChange={e => setDiscountInput(e.target.value)}
          />
          <button onClick={checkCoupon}>Check</button>
        </div>

        <button onClick={clearCart} className="clear-cart">
          Clear Cart
        </button>
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
