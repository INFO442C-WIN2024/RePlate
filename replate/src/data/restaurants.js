export const restaurants = [
  { 
    id: 1, 
    name: "Shawarma King", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Delicious middle-eastern meals.", 
    location: "4350 University Ave, Seattle",
    categories: ["Middle Eastern"],
    dietary: ["Halal"],
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
    categories: ["Korean"],
    dietary: [],
    menu: [
      { id: 1, name: "Soft Tofu Soup", price: 13.99, description: "Spicy soft tofu soup with choice of protein" },
      { id: 2, name: "Bibimbap", price: 14.99, description: "Mixed rice bowl with vegetables and egg" },
      { id: 3, name: "Bulgogi", price: 16.99, description: "Marinated beef with rice" }
    ]
  },
  { 
    id: 3, 
    name: "Manoushe Express", 
    image: "https://images.squarespace-cdn.com/content/v1/5e8f3c7dbf5c5b572c13bfb2/1590955977424-4JQNEZFXLW8BG1Z0P8Y7/20200530_131400.jpg", 
    description: "Authentic Lebanese shawarma and manoushe flatbreads", 
    location: "4234 University Way NE, Seattle",
    categories: ["Middle Eastern", "Lebanese"],
    dietary: ["Halal"],
    menu: [
      { id: 101, name: "Chicken Shawarma Wrap", price: 11.99, description: "Marinated chicken with garlic sauce and pickles" },
      { id: 102, name: "Beef Shawarma Plate", price: 15.99, description: "Tender beef shawarma served with rice and hummus" },
      { id: 103, name: "Zaatar Manoushe", price: 8.99, description: "Traditional Lebanese flatbread with zaatar herbs" },
      { id: 104, name: "Falafel Wrap", price: 9.99, description: "Crispy falafel with tahini sauce and vegetables" }
    ]
  },
  { 
    id: 4, 
    name: "Sumo Express Sushi", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Fresh and delicious sushi made to order", 
    location: "4525 University Way NE, Seattle",
    categories: ["Japanese", "Sushi"],
    dietary: ["Vegetarian options"],
    menu: [
      { id: 201, name: "California Roll", price: 8.99, description: "Crab, avocado, and cucumber" },
      { id: 202, name: "Spicy Tuna Roll", price: 10.99, description: "Fresh tuna with spicy mayo" },
      { id: 203, name: "Seattle Roll", price: 12.99, description: "Salmon, cream cheese, and avocado" },
      { id: 204, name: "Bento Box", price: 16.99, description: "Teriyaki chicken, California roll, and gyoza" }
    ]
  },
  { 
    id: 5, 
    name: "Bengal Tiger", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Authentic Bengali and Indian cuisine", 
    location: "4214 University Way NE, Seattle",
    categories: ["Indian", "Bengali"],
    dietary: ["Vegetarian", "Halal"],
    menu: [
      { id: 301, name: "Chicken Tikka Masala", price: 15.99, description: "Creamy tomato curry with tender chicken" },
      { id: 302, name: "Bengali Fish Curry", price: 17.99, description: "Traditional fish curry with mustard sauce" },
      { id: 303, name: "Biryani", price: 16.99, description: "Aromatic rice dish with choice of protein" },
      { id: 304, name: "Butter Naan", price: 3.99, description: "Fresh baked flatbread with butter" }
    ]
  },
  { 
    id: 6, 
    name: "Church's Chicken", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Crispy, juicy fried chicken and southern sides", 
    location: "4555 University Way NE, Seattle",
    categories: ["American", "Fried Chicken"],
    dietary: [],
    menu: [
      { id: 401, name: "3 Piece Chicken Combo", price: 12.99, description: "3 pieces of chicken with sides and biscuit" },
      { id: 402, name: "Spicy Chicken Sandwich", price: 7.99, description: "Crispy spicy chicken with pickles" },
      { id: 403, name: "8 Piece Family Meal", price: 24.99, description: "8 pieces of chicken with large sides" },
      { id: 404, name: "Honey Butter Biscuits (4)", price: 3.99, description: "Fresh baked biscuits with honey butter" }
    ]
  },
  { 
    id: 7, 
    name: "Halal Smash Burger", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Halal certified smashed burgers and fries", 
    location: "4299 University Way NE, Seattle",
    categories: ["American", "Burgers"],
    dietary: ["Halal"],
    menu: [
      { id: 501, name: "Classic Smash", price: 9.99, description: "Smashed patty with cheese, lettuce, and special sauce" },
      { id: 502, name: "Double Trouble", price: 13.99, description: "Double patty with double cheese and toppings" },
      { id: 503, name: "Loaded Fries", price: 6.99, description: "Crispy fries with cheese sauce and jalapeños" },
      { id: 504, name: "Chicken Sandwich", price: 10.99, description: "Crispy halal chicken with pickles and sauce" }
    ]
  }
];

export const filterCategories = [
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'sushi', name: 'Sushi', icon: '🍱' },
  { id: 'middle-eastern', name: 'Middle Eastern', icon: '🥙' },
  { id: 'indian', name: 'Indian', icon: '🍛' },
  { id: 'american', name: 'American', icon: '🍗' },
  { id: 'japanese', name: 'Japanese', icon: '🍜' },
  { id: 'chinese', name: 'Chinese', icon: '🥡' },
  { id: 'mexican', name: 'Mexican', icon: '🌮' },
  { id: 'african', name: 'African', icon: '🍲' },
  { id: 'asian', name: 'Asian', icon: '🥢' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];

export const dietaryFilters = [
  { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', name: 'Vegan', icon: '🌱' },
  { id: 'halal', name: 'Halal', icon: '🥩' }
]; 