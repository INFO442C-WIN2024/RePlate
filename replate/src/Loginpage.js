import React from 'react';
import "./Loginpage.css";
import { useNavigate, Link } from 'react-router-dom';




function LoginForm() {


    const navigate = useNavigate();




    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username;
        const password = event.target.elements.password;




        if (username.checkValidity() && password.checkValidity()) {
            alert('Form submitted successfully!');
            navigate('/homepage'); // Redirect to the success page
        } else {
            alert('Please fill out both required fields.');
        }
    };


    return (
        <div className="full-page-container">
            <div className="login-container">
                <h2 className="login-heading">Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" placeholder="Username" required />
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" required />
                    <div>
                        <input type="checkbox" id="remember" className="checkbox" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button type="submit">Login</button>


                </form>
                <a href="#">Forgot Password?</a>
                <Link to="/signup">
                    <button className="signup-button">Create an Account</button>
                </Link>
            </div>
        </div>


    );
};




export default LoginForm;
