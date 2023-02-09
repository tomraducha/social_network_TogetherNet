import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
import './index.scss';

export default function Register() {
    //state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    //comportement
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.id]: e.target.value
    //     });
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:1337/auth/local/register', formData);
    //         console.log(response);

    //         const jwt = response.data.jwt;
    //         console.log("🚀 ~ file: index.jsx:30 ~ handleSubmit ~ jwt", jwt)

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }



    //resultats
    return (
        <div className="form-container">
            <form className="form" >{/* onSubmit={handleSubmit} */}

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                    // onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                    // onChange={handleChange}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                    // onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};



