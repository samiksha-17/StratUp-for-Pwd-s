// CreateProfile.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateProfile() {
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // FormData to send multipart/form-data including image
        const formData = new FormData();
        formData.append('username', username);
        formData.append('profilePicture', profilePicture);

        try {
            // Send profile data to the backend to create user profile
            const response = await axios.post('http://localhost:5000/create-profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            // Handle success
            console.log('Profile created successfully:', response.data);
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    }

    const handleImageChange = (event) => {
        setProfilePicture(event.target.files[0]);
    };

    return (
        <div>
            <h2>Create Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="form-control rounded-0" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="profilePicture"><strong>Profile Picture</strong></label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        name="profilePicture" 
                        onChange={handleImageChange} 
                        className="form-control rounded-0" 
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Create Profile</button>
            </form>
        </div>
    )
}

export default CreateProfile;
