import React from 'react';
import "./Loginpage.css";
/*import "./SignupPage";
import "./Homepage"; */
import { useNavigate, Link } from 'react-router-dom';




function BusinessLoginForm() {


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
                <button className="link-button" onClick={() => alert('Password reset functionality coming soon!')}>
                    Forgot Password?
                </button>
                <Link to="/businesssignup">
                    <button className="signup-button">Create a Storefront</button>
                </Link>
            </div>
        </div>


        /*<Link to="/homepage">
            <button type="submit">Login</button>
        </Link> */






    );
};

export default BusinessLoginForm;
