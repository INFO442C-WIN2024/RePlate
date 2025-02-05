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
  const { savedStores, toggleSavedStore, isStoreSaved } = useSavedStores();

  const handleFilterChange = (filterId) => {
    setSelectedFilters(prev => {
      if (prev.includes(filterId)) {
        return prev.filter(f => f !== filterId);
      }
      return [...prev, filterId];
    });
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.some(filter => 
      restaurant.categories.map(c => c.toLowerCase()).includes(filter.toLowerCase()) ||
      restaurant.dietary.map(d => d.toLowerCase()).includes(filter.toLowerCase())
    );

    return matchesSearch && matchesFilters;
  });

  const savedRestaurants = restaurants.filter(restaurant => 
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
        <div className="restaurant-tags">
          {restaurant.categories.map((category, index) => (
            <span key={index} className="tag">{category}</span>
          ))}
          {restaurant.dietary.map((diet, index) => (
            <span key={`diet-${index}`} className="tag dietary">{diet}</span>
          ))}
        </div>
        <p className="location">📍 {restaurant.location}</p>
      </div>
    </Link>
  );

  return (
    <div className="homepage">
      <ThemeToggle />
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
    </div>
  );
};

export default HomePage;
