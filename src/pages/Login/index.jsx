import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
import './index.scss';

export default function Login() {
    return (
        <div className="form-container">
            <form className="form" >

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"


                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};



