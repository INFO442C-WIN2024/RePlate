import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { SavedStoresProvider } from './context/SavedStoresContext';
import HomePage from "./Homepage";
import LoginPage from "./Loginpage";
import RestaurantPage from './RestaurantPage';
import Cart from './components/Cart';


function App() {
  return (
    <ThemeProvider>
      <SavedStoresProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </CartProvider>
      </SavedStoresProvider>
    </ThemeProvider>
  );
}


export default App;
