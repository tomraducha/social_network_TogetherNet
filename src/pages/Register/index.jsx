import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';
// import Usefetch from '../../hooks/Usefetch';
import './index.scss';

export default function Register() {
    //state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    //comportement
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:1337/auth/local/register', formData);

            const jwt = response.data.jwt;
            console.log("🚀 ~ file: index.jsx:30 ~ handleSubmit ~ jwt", jwt)

            // store the JWT securely
            // Cookies.set("jwt", jwt);

            navigate("/");
        } catch (error) {
            console.error(error);
            setError("An error occured while registering. Please try again.");
        }
        setIsLoading(false);
    };

    //resultats
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>

                {error && <div className="error">{error}</div>}

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};
