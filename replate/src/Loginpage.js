import React from 'react';
import "./Loginpage.css";

const LoginForm = () => {
    return (
        <div className="full-page-container">
            <div className="login-container">
                <h2 className="login-heading">Sign-in</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <a href="#">Forgot Password?</a>
            </div>
        </div>


    );
};

export default LoginForm;