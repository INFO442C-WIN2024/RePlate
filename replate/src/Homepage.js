import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import "./Homepage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const getInitialLikes = () => {
    const savedLikes = localStorage.getItem("restaurantLikes");
    return savedLikes ? JSON.parse(savedLikes) : {};
  };

  const [likes, setLikes] = useState(getInitialLikes);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const restaurants = [
    { id: 1, name: "Shawarma King", image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", description: "Delicious middle-eastern meals.", location: "4350 University Ave, Seattle" },
    { id: 2, name: "Korean Tofu House", image: "https://s3-media0.fl.yelpcdn.com/bphoto/0MrlQ4w_mH-nqbNXEJYONw/348s.jpg", description: "Delicious Korean meals.", location: "4350 University Ave, Seattle" },
    { id: 3, name: "Sumo Express Sushi", image: "https://s3-media0.fl.yelpcdn.com/bphoto/4SOg_Ka6z9GI6E569EirWA/348s.jpg", description: "Delicious sushi.", location: "4350 University Ave, Seattle" },
    { id: 4, name: "Halal Smash Burger", image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", description: "Delicious burgers.", location: "4350 Roosevelt Ave, Seattle" },
    { id: 5, name: "Manoushe Express", image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", description: "Delicious middle-eastern meals.", location: "4350 Roosevelt Ave, Seattle" },
  ];

  useEffect(() => {
    const fuse = new Fuse(restaurants, {
      keys: ["name"],
      threshold: 0.3,
    });

    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery);
      setFilteredRestaurants(results.map(result => result.item));
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchQuery]);

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = {
        ...prevLikes,
        [id]: (prevLikes[id] || 0) + 1,
      };
      localStorage.setItem("restaurantLikes", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  const getGoogleMapsUrl = (location) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Food Rescue</h1>
        <p>Order delicious food while reducing waste!</p>
        <Link to="/login">
          <button className="login-button">Sign-in</button>
        </Link>
      </header>

      <input
        type="text"
        className="search-bar"
        placeholder="Search restaurants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img src={restaurant.image} alt={`${restaurant.name}`} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <a href={getGoogleMapsUrl(restaurant.location)} target="_blank" rel="noopener noreferrer" className="location">
              📍 {restaurant.location}
            </a>
            <button className="like-button" onClick={() => handleLike(restaurant.id)}>
              ❤️ Like {likes[restaurant.id] || 0}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
