export const restaurants = [
  { 
    id: 1, 
    name: "Shawarma King", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Delicious middle-eastern meals.", 
    location: "4350 University Ave, Seattle",
    menu: [
      { id: 1, name: "Chicken Shawarma", price: 12.99, description: "Marinated chicken wrapped in fresh pita bread" },
      { id: 2, name: "Falafel Wrap", price: 10.99, description: "Crispy falafel with tahini sauce" },
      { id: 3, name: "Mixed Grill Plate", price: 15.99, description: "Assortment of grilled meats with rice" }
    ]
  },
  { 
    id: 2, 
    name: "Korean Tofu House", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/0MrlQ4w_mH-nqbNXEJYONw/348s.jpg", 
    description: "Delicious Korean meals.", 
    location: "4350 University Ave, Seattle",
    menu: [
      { id: 1, name: "Soft Tofu Soup", price: 13.99, description: "Spicy soft tofu soup with choice of protein" },
      { id: 2, name: "Bibimbap", price: 14.99, description: "Mixed rice bowl with vegetables and egg" },
      { id: 3, name: "Bulgogi", price: 16.99, description: "Marinated beef with rice" }
    ]
  },
  // ... Add menu items for other restaurants ...
]; 