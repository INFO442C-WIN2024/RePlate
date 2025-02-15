import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
/*import MapView from './MapView'; */
import './Header.css';

const Header = () => {
  const { cart } = useCart();
  const location = useLocation();
  const isMapView = location.pathname === '/map';

  console.log('Header component is rendering');
  console.log('Header rendering, cart:', cart); // Debug log

  return (
    <header className="header">
      <div className="header-content">
        <div className="left-aligned">
          <Link to="/" className="logo-button">
            Replate
          </Link>
        </div>

        <div className="header-right">
          <Link
            to={isMapView ? "/" : "/map"}
            className="view-toggle-button"
          >
            {isMapView ? "📋 List View" : "🗺️ Map View"}
          </Link>
          <Link to="/cart" className="cart-button">
            🛒 Cart ({cart?.length || 0})
          </Link>
          <Link to="/login" className="sign-in-button">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 