import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from './data/restaurants';
import { useCart } from './context/CartContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import './RestaurantPage.css';

const RestaurantPage = () => {
  const { slug } = useParams();
  const { cart, addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const restaurant = restaurants.find(r => r.slug === slug);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleAddToCart = (item) => {
    addToCart(item, restaurant.id);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="restaurant-page">
      {showPopup && <div className="cart-popup">Item added to cart!</div>}

      <div className="header-nav">
        <Header />
        <div className="navigation-links">
          <Link to="/" className="back-button">← Back to Home</Link>
          <Link to="/cart" className="cart-button">
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </div>

      <div className="restaurant-header">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
          <p className="location">📍 {restaurant.location}</p>
        </div>
      </div>

      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {restaurant.menu.map((item) => (
            <div key={item.id} className={`menu-item ${item.isDiscounted ? 'discounted' : ''}`}>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.isDiscounted ? (
                  <div className="price-container">
                    <span className="original-price">${item.price.toFixed(2)}</span>
                    <span className="discount-price">${item.discountPrice}</span>
                  </div>
                ) : (
                  <span className="price">${item.price.toFixed(2)}</span>
                )}
              </div>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default RestaurantPage;
