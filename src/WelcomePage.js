import React from 'react';
import { Link } from 'react-router-dom';
import "./WelcomePage.css";

const WelcomePage = () => {

    /*   function setBackground() {
   
           let welcomePage = document.querySelector('welcome-page-container');
   
           welcomePage.style.setProperty('background-image', "url('background.jpg')", 'important');
           welcomePage.style.setProperty('background-size', "cover", 'important');
           welcomePage.style.setProperty('background-repeat', "no-repeat", 'important');
           welcomePage.style.setProperty('height', "100vh", 'important');
           welcomePage.style.setProperty('width', "100vw", 'important');
       }
   
       document.addEventListener("DOMContentLoaded", function () {
           setBackground();
       }); */



    return (
        <div className="welcome-page-container">
            <div className="welcome-container">
                <h1 className="welcome-title">Welcome to Replate</h1>
                <p className="description">Our mission is to reduce food waste by providing
                    the business with an opportunity to sell surplus
                    meals at the discounted rate while also allowing
                    the customer to choose what meals they want to get</p>
                <div className="links">
                    <Link to="/login">
                        <button className="login-button-2" type="submit">Customer</button>
                    </Link>
                    <Link to="/businesslogin">
                        <button className="login-button-2" type="submit">Business</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;