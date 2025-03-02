import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { SavedStoresProvider } from './context/SavedStoresContext';
import Checkout from './components/Checkout';
import HomePage from "./Homepage";
import LoginPage from "./Loginpage";
import SignupForm from "./SignupPage";
import AccountCreated from "./AccountCreated";
import BusinessAccountCreated from "./AccountCreatedBusiness";
import BusinessLoginPage from "./BusinessLoginPage";
import BusinessSignUp from "./BusinessCreateAccount";
import AccountType from "./AccountType";
import RestaurantPage from './RestaurantPage';
import Cart from './components/Cart';
import Map from './components/MapView';
import CreateDiscount from "./CreateDiscount";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <SavedStoresProvider>
        <CartProvider>
          <Router>
            <Routes>
            <Route path="/" element={<Navigate to="/restaurant" replace />} />
            <Route path="/restaurant" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/businesslogin" element={<BusinessLoginPage />} />
              <Route path="/restaurant/:slug" element={<RestaurantPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/map" element={<Map />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="accounttype" element={<AccountType />} />
              <Route path="/businesssignup" element={<BusinessSignUp />} />
              <Route path="/accountcreated" element={<AccountCreated />} />
              <Route path="/accountcreatedbusiness" element={<BusinessAccountCreated />} />
              <Route path="/creatediscount" element={<CreateDiscount />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </CartProvider>
      </SavedStoresProvider>
    </ThemeProvider>
  );
}


export default App;
