import React, { useState } from 'react';
import "./Loginpage.css";
import { useNavigate, Link } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  // Sample credentials
  const validCredentials = {
    username: 'user1',
    password: '12345',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value.trim();
    const password = event.target.elements.password.value.trim();

    // Check if credentials match the sample username-password
    if (username === validCredentials.username && password === validCredentials.password) {
      setFormError(''); // Clear any previous error
      navigate('/'); // Redirect to the homepage
    } else {
      setFormError('User not found. Please check your username and password.');
    }
  };

  return (
    <div className="full-page-container">
      <div className="login-container">
        <h2 className="login-heading">Welcome Back!</h2>
        <p className="login-subheading">Please sign in to your account</p>
        {formError && <p className="error-message">{formError}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="visually-hidden">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="input-field"
            />
          </div>
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" className="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-button">Create an Account</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
