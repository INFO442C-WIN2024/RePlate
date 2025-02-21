import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from './data/restaurants';
import { useSavedStores } from './context/SavedStoresContext';
import ThemeToggle from './components/ThemeToggle';
import FilterBar from './components/FilterBar';
import './Homepage.css';

const HomePage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [discountFilter, setDiscountFilter] = useState(false);
  const { savedStores, toggleSavedStore, isStoreSaved } = useSavedStores();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleFilterChange = (filterId) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filterId)) {
        return prev.filter((f) => f !== filterId);
      }
      return [...prev, filterId];
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const enteredUsername = event.target.elements.username.value.trim();
    const enteredPassword = event.target.elements.password.value.trim();

    if (enteredUsername === 'user1' && enteredPassword === '12345') {
      setIsLoggedIn(true);
      setUsername(enteredUsername);
      setShowLoginPopup(false);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());
  
    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        restaurant.categories.some((c) => c.toLowerCase() === filter.toLowerCase()) ||
        restaurant.dietary.some((d) => d.toLowerCase() === filter.toLowerCase())
      );
  
    const hasDiscountedItems = restaurant.menu.some((item) => item.isDiscounted);
    const matchesDiscount = !discountFilter || hasDiscountedItems;
  
    return matchesSearch && matchesFilters && matchesDiscount;
  });
  

  const savedRestaurants = restaurants.filter((restaurant) =>
    savedStores.includes(restaurant.id)
  );

  const RestaurantCard = ({ restaurant }) => (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant-link">
      <div className="restaurant-card">
        <div className="restaurant-image-container">
          <img src={restaurant.image} alt={restaurant.name} />
          <button
            className={`save-button ${isStoreSaved(restaurant.id) ? 'saved' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              toggleSavedStore(restaurant.id);
            }}
          >
            {isStoreSaved(restaurant.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <p className="location">📍 {restaurant.location}</p>
      </div>
    </Link>
  );

  return (
    <div className="homepage">
      <div className="top-bar">
        <ThemeToggle />
        {!isLoggedIn ? (
          <button
            className="sign-in-button"
            onClick={() => setShowLoginPopup(true)}
          >
            Sign In
          </button>
        ) : (
          <div className="user-controls">
            <span className="welcome-message">Welcome, {username}!</span>
            <button
              className="log-out-button"
              onClick={() => {
                setIsLoggedIn(false);
                setUsername('');
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      <h1 className="site-title">Replate</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <FilterBar 
  selectedFilters={selectedFilters} 
  onFilterChange={handleFilterChange} 
  discountFilter={discountFilter} 
  onDiscountFilterChange={setDiscountFilter} 
/>



      {savedRestaurants.length > 0 && (
        <div className="saved-stores-section">
          <h2>Saved Stores</h2>
          <div className="restaurant-list">
            {savedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      )}

      <div className="all-restaurants-section">
        <h2>All Restaurants</h2>
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>

      {showLoginPopup && (
        <div className="login-popup">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Sign In</h2>
            {loginError && <p className="login-error">{loginError}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="login-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              required
            />
            <div className="button-container">
              <button type="submit" className="login-button">
                Log In
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowLoginPopup(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bottom-nav">
        <Link to="/map" className="nav-button">
          🗺️ Map View
        </Link>
        <Link to="/cart" className="nav-button">
          🛒 Cart
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
