export const restaurants = [
  { 
    id: 1, 
    slug: "shawarma-king", 
    name: "Shawarma King", 
    image: "https://images.seattletimes.com/wp-content/uploads/2024/09/09062024_kent_1306272.jpg?d=780x585", 
    description: "Late-night counter-service spot serving shawarma, kebabs, gyros & falafel.", 
    location: "4337 University Wy NE, Seattle",
    coordinates: {
      lat: 47.6616,
      lng: -122.3132
    },
    categories: ["Middle Eastern"],
    dietary: ["Halal"],
    menu: [
      { id: 1, name: "Chicken Shawarma", price: 12.99, description: "Marinated chicken wrapped in fresh pita bread" },
      { id: 2, name: "Falafel Wrap", price: 10.99, description: "Crispy falafel with tahini sauce" },
      { id: 3, name: "Mixed Grill Plate", price: 15.99, description: "Assortment of grilled meats with rice" }
    ], 
    discountedMenu: []
  },
  { 
    id: 2, 
    slug: "korean-tofu-house", 
    name: "Korean Tofu House", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/0MrlQ4w_mH-nqbNXEJYONw/348s.jpg", 
    description: "Quick-serve Korean eatery is a casual, college-town go-to for bibimbop, soups & BBQ.", 
    location: "4350 University Ave, Seattle",
    coordinates: {
      lat: 47.6619,
      lng: -122.3127
    },
    categories: ["Korean"],
    dietary: [],
    menu: [
      { id: 21, name: "Soft Tofu Soup", price: 13.99, description: "Spicy soft tofu soup with choice of protein" },
      { id: 22, name: "Bibimbap", price: 14.99, description: "Mixed rice bowl with vegetables and egg" },
      { id: 23, name: "Bulgogi", price: 16.99, description: "Marinated beef with rice" }
    ]
  },
  { 
    id: 3, 
    slug: "manoushe-express", 
    name: "Manoushe Express", 
    image: "https://cookingorgeous.com/wp-content/uploads/2024/01/easy-homemade-lebanese-chicken-shawarma-20-500x500.jpg", 
    description: "Authentic Lebanese shawarma and manoushe flatbreads", 
    location: "13721 Lake City Way NE, Seattle",
    coordinates: {
      lat: 47.7284,
      lng: -122.2911
    },
    categories: ["Middle Eastern", "Lebanese"],
    dietary: ["Halal"],
    menu: [
      { id: 31, name: "Chicken Shawarma Wrap", price: 11.99, description: "Marinated chicken with garlic sauce and pickles" },
      { id: 32, name: "Beef Shawarma Plate", price: 15.99, description: "Tender beef shawarma served with rice and hummus" },
      { id: 33, name: "Zaatar Manoushe", price: 8.99, description: "Traditional Lebanese flatbread with zaatar herbs" },
      { id: 34, name: "Falafel Wrap", price: 9.99, description: "Crispy falafel with tahini sauce and vegetables" }
    ]
  },
  { 
    id: 4, 
    slug: "sumo-express-sushi", 
    name: "Sumo Express Sushi", 
    image: "https://everydayglutenfreegourmet.ca/wp-content/uploads/2023/07/handmade-sushi-rolls.jpg", 
    description: "Fresh and delicious sushi made to order", 
    location: "5000 University Wy NE, Seattle",
    coordinates: {
      lat: 47.6658,
      lng: -122.3129
    },
    categories: ["Japanese", "Sushi"],
    dietary: ["Vegetarian options"],
    menu: [
      { id: 41, name: "California Roll", price: 8.99, description: "Crab, avocado, and cucumber" },
      { id: 42, name: "Spicy Tuna Roll", price: 10.99, description: "Fresh tuna with spicy mayo" },
      { id: 43, name: "Seattle Roll", price: 12.99, description: "Salmon, cream cheese, and avocado" },
      { id: 44, name: "Bento Box", price: 16.99, description: "Teriyaki chicken, California roll, and gyoza" }
    ]
  },
  { 
    id: 5, 
    slug: "bengal-tiger", 
    name: "Bengal Tiger", 
    image: "https://www.allrecipes.com/thmb/SIgWrOI85-BlVbtGgUeew-77B7o=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg", 
    description: "Authentic Bengali and Indian cuisine", 
    location: "6509 Roosevelt Way NE, Seattle",
    coordinates: {
      lat: 47.6765,
      lng: -122.3171
    },
    categories: ["Indian", "Bengali"],
    dietary: ["Vegetarian", "Halal"],
    menu: [
      { id: 51, name: "Chicken Tikka Masala", price: 15.99, description: "Creamy tomato curry with tender chicken" },
      { id: 52, name: "Bengali Fish Curry", price: 17.99, description: "Traditional fish curry with mustard sauce" },
      { id: 53, name: "Biryani", price: 16.99, description: "Aromatic rice dish with choice of protein" },
      { id: 54, name: "Butter Naan", price: 3.99, description: "Fresh baked flatbread with butter" }
    ]
  },
  
  { 
    id: 6, 
    slug: "jewel-of-india", 
    name: "Jewel of India", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/52/ba/05/lunch-buffet.jpg",
    description: "Authentic Indian cuisine", 
    location: "4214 University Way NE, Seattle",
    coordinates: {
      lat: 47.6587,
      lng: -122.3133
    },
    categories: ["Indian"],
    dietary: ["Vegetarian", "Halal"],
    menu: [
      { id: 61, name: "Chicken Tikka Masala", price: 15.99, description: "Creamy tomato curry with tender chicken" },
      { id: 62, name: "Chicken Biryani", price: 16.99, description: "Aromatic rice dish with chicken" },
      { id: 63, name: "Butter Naan", price: 3.99, description: "Fresh baked flatbread with butter" }
    ]
  },
  { 
    id: 7, 
    slug: "church's-chicken", 
    name: "Church's Chicken", 
    image: "https://leitesculinaria.com/wp-content/uploads/2024/04/batter-fried-chicken-1200.jpg", 
    description: "Crispy, juicy fried chicken and southern sides", 
    location: "4555 University Way NE, Seattle",
    coordinates: {
      lat: 47.6632,
      lng: -122.3127
    },
    categories: ["American", "Fried Chicken"],
    dietary: [],
    menu: [
      { id: 71, name: "3 Piece Chicken Combo", price: 12.99, description: "3 pieces of chicken with sides and biscuit" },
      { id: 72, name: "Spicy Chicken Sandwich", price: 7.99, description: "Crispy spicy chicken with pickles" },
      { id: 73, name: "8 Piece Family Meal", price: 24.99, description: "8 pieces of chicken with large sides" },
      { id: 74, name: "Honey Butter Biscuits (4)", price: 3.99, description: "Fresh baked biscuits with honey butter" }
    ]
  },
  { 
    id: 8, 
    slug: "halal-smash-burger", 
    name: "Halal Smash Burger", 
    image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3277,w_4915,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0523_Smash-That-Burger_Amber-Fouts_57A4049_ajwyvw.jpg", 
    description: "Halal certified smashed burgers and fries", 
    location: "4299 University Way NE, Seattle",
    coordinates: {
      lat: 47.6601,
      lng: -122.3132
    },
    categories: ["American", "Burgers"],
    dietary: ["Halal"],
    menu: [
      { id: 81, name: "Classic Smash", price: 9.99, description: "Smashed patty with cheese, lettuce, and special sauce" },
      { id: 82, name: "Double Trouble", price: 13.99, description: "Double patty with double cheese and toppings" },
      { id: 83, name: "Loaded Fries", price: 6.99, description: "Crispy fries with cheese sauce and jalapeños" },
      { id: 84, name: "Chicken Sandwich", price: 10.99, description: "Crispy halal chicken with pickles and sauce" }
    ]
  },
  { 
    id: 9, 
    slug: "istanbul-shawarma", 
    name: "Istanbul Shawarma", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/CG8yJb5ymdn3vWTB7NFu3A/348s.jpg", 
    description: "Turkish shawarma and manoushe flatbreads.", 
    location: "4337 University Way NE, Seattle",
    coordinates: {
      lat: 47.6616,
      lng: -122.3132
    },
    categories: ["Shawarma"],
    dietary: ["Halal"],
    menu: [
      { id: 91, name: "Chicken Shawarma Wrap", price: 11.99, description: "Marinated chicken with garlic sauce and pickles" },
      { id: 92, name: "Beef Shawarma Plate", price: 15.99, description: "Tender beef shawarma served with rice and hummus" },
      { id: 93, name: "Falafel Wrap", price: 9.99, description: "Crispy falafel with tahini sauce and vegetables" }
    ]
  },
  ,
  { 
    id: 10, 
    slug: "sushi-qfc-yummi", 
    name: "Sushi from QFC by Yummi", 
    image: "https://everydayglutenfreegourmet.ca/wp-content/uploads/2023/07/handmade-sushi-rolls.jpg", 
    description: "Fresh and delicious sushi made to order", 
    location: "600 N 34th St, Seattle",
    coordinates: {
      lat: 47.6494,
      lng: -122.3470
    },
    categories: ["Japanese", "Sushi"],
    dietary: ["Vegetarian options"],
    menu: [
      { id: 101, name: "California Roll", price: 8.99, description: "Crab, avocado, and cucumber" },
      { id: 102, name: "Spicy Tuna Roll", price: 10.99, description: "Fresh tuna with spicy mayo" },
      { id: 103, name: "Japanese Bagel Roll", price: 12.99, description: "Salmon, cream cheese, and avocado" },
      { id: 104, name: "Flyin' Hawaiian Salmon Poke Bowl", price: 16.99, description: "Salmon poke bowl with avocado, lettuce, and crispy onions" }
    ]
  },
  { 
    id: 11, 
    slug: "pcc-fremont", 
    name: "PCC - Fremont", 
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/be/2d/62/pcc-natural-markets.jpg?w=900&h=500&s=1", 
    description: "Hot soup bar and sandwiches", 
    location: "600 N 34th St, Seattle",
    coordinates: {
      lat: 47.6494,
      lng: -122.3470
    },
    categories: ["Soups", "Sandwiches", "Pizza"],
    dietary: ["Vegetarian options"],
    menu: [
      { id: 111, name: "Salmon cake and potato salad", price: 8.99, description: "Salmon cake and potato salad" },
      { id: 112, name: "Mozarella panini", price: 8.99, description: "Mozarella panini with pesto and tomatoes" }
    ]
  },
  
  { 
    id: 12, 
    slug: "whole-foods", 
    name: "Whole Foods", 
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/be/2d/62/pcc-natural-markets.jpg?w=900&h=500&s=1", 
    description: "Hot soup bar and sandwiches", 
    location: "1026 NE 64th St, Seattle",
    coordinates: {
      lat: 47.6765,
      lng: -122.3171
    },
    categories: ["Soups", "Sandwiches", "Pizza"],
    dietary: ["Vegetarian options"],
    menu: [
      { id: 121, name: "Salmon cake and potato salad", price: 8.99, description: "Salmon cake and potato salad" },
      { id: 122, name: "Mozarella panini", price: 8.99, description: "Mozarella panini with pesto and tomatoes" }
    ]
  },
  { 
    id: 13, 
    slug: "cedars", 
    name: "Cedars Restaurant", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/52/ba/05/lunch-buffet.jpg",
    description: "Hot soup bar and sandwiches", 
    location: "4759 Brooklyn Ave NE, Seattle",
    coordinates: {
      lat: 47.6642,
      lng: -122.3142
    },
    categories: ["Soups", "Sandwiches", "Pizza"],
    dietary: ["Halal"],
    menu: [
      { id: 131, name: "Chicken Tikka Masala", price: 15.99, description: "Creamy tomato curry with tender chicken" },
      { id: 132, name: "Chicken Biryani", price: 16.99, description: "Aromatic rice dish with chicken" },
      { id: 133, name: "Butter Naan", price: 3.99, description: "Fresh baked flatbread with butter" }
    ]
  },
  { 
    id: 14, 
    slug: "shawarma-time", 
    name: "Shawarma Time", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/CG8yJb5ymdn3vWTB7NFu3A/348s.jpg", 
    description: "Shawarma, kebabs, and middle-eastern salads", 
    location: "4701 Roosevelt Way NE, Seattle",
    categories: ["Middle Eastern"],
    dietary: ["Halal"],
    menu: [
      { id: 141, name: "Chicken Shawarma Wrap", price: 11.99, description: "Marinated chicken with garlic sauce and pickles" },
      { id: 142, name: "Beef Shawarma Plate", price: 15.99, description: "Tender beef shawarma served with rice and hummus" },
      { id: 143, name: "Falafel Wrap", price: 9.99, description: "Crispy falafel with tahini sauce and vegetables" }
    ]
  },
  { 
    id: 15, 
    slug: "aladdin", 
    name: "Aladdin", 
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/CG8yJb5ymdn3vWTB7NFu3A/348s.jpg", 
    description: "Hot soup bar and sandwiches", 
    location: "4525 University Way NE, Seattle",
    categories: ["Middle Eastern"],
    dietary: ["Halal"],
    menu: [
      { id: 151, name: "Chicken Shawarma Wrap", price: 11.99, description: "Marinated chicken with garlic sauce and pickles" },
      { id: 152, name: "Beef Shawarma Plate", price: 15.99, description: "Tender beef shawarma served with rice and hummus" },
      { id: 153, name: "Falafel Wrap", price: 9.99, description: "Crispy falafel with tahini sauce and vegetables" }
    ]
  },
  { 
    id: 16, 
    slug: "taste-of-india", 
    name: "Taste of India", 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/52/ba/05/lunch-buffet.jpg",
    description: "Authentic Indian cuisine", 
    location: "5517 Roosevelt Way NE, Seattle",
    coordinates: {
      lat: 47.6685,
      lng: -122.3171
    },
    categories: ["Indian"],
    dietary: ["Vegetarian", "Halal"],
    menu: [
      { id: 161, name: "Chicken Korma", price: 15.99, description: "Creamy cashew curry with tender chicken" },
      { id: 162, name: "Lamb Biryani", price: 16.99, description: "Aromatic rice dish with lamb" },
      { id: 163, name: "Butter Naan", price: 3.99, description: "Fresh baked flatbread with butter" }
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
  { id: 'sandwiches', name: 'Sandwiches', icon: '🍔' },
  { id: 'soups', name: 'Soups', icon: '🍜' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];

export const dietaryFilters = [
  { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', name: 'Vegan', icon: '🌱' },
  { id: 'halal', name: 'Halal', icon: 'حلال' }
]; 

export const couponList = [
  {
    key: "123456",
    value: 0.1
  },
  {
    key: "11111",
    value: 0.5
  }
]
export function updateDiscounts() {
  restaurants.forEach(restaurant => {
    restaurant.menu.forEach(item => {
      item.isDiscounted = false;
      item.discountPrice = null;
    });
  });

  const discountedRestaurants = restaurants
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(restaurants.length / 2));

  discountedRestaurants.forEach(restaurant => {
    const discountItems = restaurant.menu
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    discountItems.forEach(item => {
      item.isDiscounted = true;
      item.discountPrice = (item.price * 0.8).toFixed(2);
    });
  });
}

updateDiscounts();
