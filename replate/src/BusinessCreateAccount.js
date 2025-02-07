import React, { useState } from 'react';
import "./BusinessSignUp.css";
import { useNavigate } from 'react-router-dom';

function SignupFormBusiness() {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setFileName(file ? file.name : '');

    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email;
        const username = event.target.elements.username;
        const restaurantname = event.target.elements.restaurantname;
        const restaurantdescription = event.target.elements.restaurantdescription;
        const cuisinetype = event.target.elements.cuisinetype;
        const address = event.target.elements.address;
        const password = event.target.elements.password;
        const repeatpassword = event.target.elements.repeatpassword;


        if (username.checkValidity() && password.checkValidity()
            && email.checkValidity() && restaurantname.checkValidity()
            && restaurantdescription.checkValidity() && cuisinetype.checkValidity()
            && address.checkValidity() && selectedFile && repeatpassword.checkValidity()) {
            alert('Form submitted successfully!');
            navigate('/accountcreatedbusiness'); // Redirect to the success page
        } else {
            alert('Please fill out all the required fields.');
        }
    };

    return (
        <div className="full-page-container">
            <div className="signup-container">
                <h2 className="signup-heading">Sign-up for a new restaurant account</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="E-mail " id="email" required />
                    <label htmlFor="username"></label>
                    <input type="text" placeholder="Username" id="username" required />
                    <label htmlFor="restaurantname"></label>
                    <input type="text" id="restaurantname" placeholder="Name of the Restaurant" required />
                    <label htmlFor="restaurantdescription"></label>
                    <input type="text" id="restaurantdescription" placeholder="Restaurant description" required />
                    <label htmlFor="cuisinetype"></label>
                    <input type="text" id="cuisinetype" placeholder="Cuisine type(s)" required />
                    <label htmlFor="address"></label>
                    <input type="text" id="address" placeholder="Address" required />
                    <div className="insert-image-container">
                        <p className="description-text">Please upload an image of your restaurant</p>
                        <label htmlFor="imageUpload" className="custom-file-upload">
                            <span className="upload-icon">📷</span> Choose File
                            <input type="file" id="imageUpload" className="file-input" onChange={handleFileChange} />
                        </label>
                        {fileName && <p className="file-name">Selected File: {fileName}</p>}
                    </div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" placeholder="Password" required />
                    <label htmlFor="repeatpassword"></label>
                    <input type="password" id="repeatpassword" placeholder="Repeat Password" required />
                    <button type="submit" id="submit-btn">Create an Account</button>
                </form>
            </div>
        </div>


    );
};

export default SignupFormBusiness;