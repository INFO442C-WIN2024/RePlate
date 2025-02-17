import React from 'react';
import "./Loginpage.css";
import { Link } from 'react-router-dom';

const AccountType = () => {


    return (
        <div className="full-page-container">
            <div className="login-container">
                <h2 className="login-heading">Choose Account Type</h2>
                <Link to="/signup">
                    <button className="signup-button"> User Create an account</button>
                </Link>
                <Link to="/businesssignup">
                    <button className="signup-button">Business Create an account</button>
                </Link>
            </div>
        </div>




    );
};

export default AccountType;
