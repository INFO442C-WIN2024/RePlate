import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurants } from './data/restaurants';
import './CreateDiscount.css';

const CreateDiscount = () => {
    const navigate = useNavigate();
    const [restaurantId, setRestaurantId] = useState('');
    const [mealName, setMealName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));

        if (restaurant) {
            restaurant.discountedMenu.push({
                id: Date.now(),
                name: mealName,
                originalPrice: parseFloat(originalPrice),
                discountedPrice: parseFloat(discountedPrice),
                description
            });

            alert('Discounted meal added successfully!');
            navigate('/'); // Redirect to homepage
        } else {
            alert('Restaurant not found');
        }
    };

    return (
        <div className="full-page-container">
            <div className="discount-container">
                <h2 className="discount-heading">Create a Discounted Meal</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="restaurantId"></label>
                    <select id="restaurantId" value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} required>
                        <option value="">Select a restaurant</option>
                        {restaurants.map((r) => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                    </select>
                    <label htmlFor="mealName"></label>
                    <input type="text" id="mealName" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} required />
                    <label htmlFor="originalPrice"></label>
                    <input type="number" id="originalPrice" placeholder="Original Price" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} required />
                    <label htmlFor="discountedPrice"></label>
                    <input type="number" id="discountedPrice" placeholder="Discounted Price" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} required />
                    <label htmlFor="description"></label>
                    <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <button type="submit" className="submit-btn">Add Discount</button>
                </form>
            </div>
        </div>
    );
};

export default CreateDiscount;
