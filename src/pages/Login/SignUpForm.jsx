import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './index.scss';

export default function SignUpForm() {
    //state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

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

            Cookies.set("token", jwt);

            navigate("/profile");
        } catch (error) {
            console.error(error);
            setError("An error occured while registering. Please try again.");
        }
        setIsLoading(false);
    };

    //resultats
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit} id="sign-up-form">
                {error && <div className="error">{error}</div>}

                <label htmlFor="username">Username:</label>
                <br />
                <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="password-conf">Confirmer mot de passe</label>
                <br />
                <input
                    type="password"
                    id="password-conf"
                    onChange={handleChange}
                />
                {/* <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                    J'accepte les{" "}
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        conditions générales
                    </a>
                </label> */}
                <br />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};