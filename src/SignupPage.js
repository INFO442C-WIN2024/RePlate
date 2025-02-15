import React from 'react';
import "./Loginpage.css";
import { useNavigate } from 'react-router-dom';




function SignupForm() {


    const navigate = useNavigate();




    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email;
        const username = event.target.elements.username;
        const password = event.target.elements.password;
        const repeatpassword = event.target.elements.repeatpassword;






        if (username.checkValidity() && password.checkValidity()
            && email.checkValidity() && repeatpassword.checkValidity()) {


            alert('Form submitted successfully!');
            navigate('/login'); // Redirect to the success page
        } else {
            alert('Please fill out both required fields.');
        }
    };


    return (
        <div className="full-page-container">
            <div className="login-container">
                <h2 className="login-heading">Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="E-mail" required />
                    <label htmlFor="username"></label>
                    <input type="text" id="username" placeholder="Username" required />
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" required />
                    <label htmlFor="repeatpassword"></label>
                    <input type="password" id="repeatpassword" placeholder="Repeat Password" required />
                    <button type="submit">Create an Account</button>
                </form>
            </div>
        </div>
    );
};




export default SignupForm;