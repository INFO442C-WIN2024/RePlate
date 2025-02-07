import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { SavedStoresProvider } from './context/SavedStoresContext';
import HomePage from "./Homepage";
import LoginPage from "./Loginpage";
import SignupForm from "./SignupPage";
import AccountCreated from "./AccountCreated";
import BusinessAccountCreated from "./AccountCreatedBusiness";
import BusinessLoginPage from "./BusinessLoginPage";
import BusinessSignUp from "./BusinessCreateAccount";
import RestaurantPage from './RestaurantPage';
import Cart from './components/Cart';
import Map from './components/MapView';


function App() {
  return (
    <ThemeProvider>
      <SavedStoresProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/businesslogin" element={<BusinessLoginPage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/map" element={<Map />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/businesssignup" element={<BusinessSignUp />} />
              <Route path="/accountcreated" element={<AccountCreated />} />
              <Route path="/accountcreatedbusiness" element={<BusinessAccountCreated />} />
            </Routes>
          </Router>
        </CartProvider>
      </SavedStoresProvider>
    </ThemeProvider>
  );
}


export default App;
