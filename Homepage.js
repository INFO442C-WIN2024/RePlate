import React from "react";
import "./Homepage.css";

const HomePage = () => {
  const restaurants = [
    {
      id: 1,
      name: "Shawarma King",
      image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585",
      description: "Delicious middle-eastern meals.",
      location: "4350 University Ave, Seattle",
    },
    {
      id: 2,
      name: "Korean Tofu House",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/0MrlQ4w_mH-nqbNXEJYONw/348s.jpg",
      description: "Delicious Korean meals.",
      location: "4350 University Ave, Seattle",
    },
    {
      id: 3,
      name: "Sumo Express Sushi",
      image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585",
      description: "Delicious sushi.",
      location: "4350 University Ave, Seattle",
    },
    {
    id: 4,
    name: "Halal Smash Burger",
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585",
    description: "Delicious burgers.",
    location: "4350 Roosevelt Ave, Seattle",
    },
    {
    id: 5,
    name: "Manoushe Express",
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585",
    description: "Delicious middle-eastern meals.",
    location: "4350 Roosevelt Ave, Seattle",
    },
  ];

  return (
    <div className="homepage">
      <header className="header">
        <h1>Food Rescue</h1>
        <p>Order delicious food while reducing waste!</p>
      </header>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img src={restaurant.image} alt={`${restaurant.name}`} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p className="location">{restaurant.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
