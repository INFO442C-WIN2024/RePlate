import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h1 className="checkout-title">Secure Checkout</h1>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Name on Card</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              placeholder="1234 5678 9012 3456"
              maxLength="16"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="123"
                maxLength="3"
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Order Confirmed</h2>
            <p>The restaurant has been notified, and you can pick up your order in 15 minutes!</p>
            <button onClick={closePopup} className="close-popup-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
