import React from 'react';
import { filterCategories, dietaryFilters } from '../data/restaurants';
import './FilterBar.css';

const FilterBar = ({ selectedFilters, onFilterChange }) => {
  const handleFilterClick = (filterId) => {
    onFilterChange(filterId);
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <div className="filter-scroll">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${selectedFilters.includes(category.id) ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="dietary-section">
        <div className="filter-scroll">
          {dietaryFilters.map((diet) => (
            <button
              key={diet.id}
              className={`filter-button dietary ${selectedFilters.includes(diet.id) ? 'active' : ''}`}
              onClick={() => handleFilterClick(diet.id)}
            >
              <span className="filter-icon">{diet.icon}</span>
              {diet.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 