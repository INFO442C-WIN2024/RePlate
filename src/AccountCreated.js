import "./Loginpage.css";
import "./Loginpage";
import { Link } from 'react-router-dom';
import "./AccountCreated.css";

const AccountCreated = () => {
    return (
        <div className="full-page-container">
            <div className="message-container">
                <h2 className="message-heading">Account Successfully Created</h2>
                <h3 className="login-message"> Sign in into your account?</h3>
                <Link to="/login">
                    <button className="login-button-2" type="submit">Sign in</button>
                </Link>
            </div>
        </div>


    );
};

export default AccountCreated;