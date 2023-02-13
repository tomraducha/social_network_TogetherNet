import React from 'react'
import './index.scss'
import { NavLink } from "react-router-dom"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const cookie = Cookies.get("token");
    const handleClick = () => {
        Cookies.remove('token');
        navigate("/");
    }
    return (
        <nav className="container-navbar">

            <NavLink to="/" >
                <div className="logo-website">
                    <h1>TogetherNet</h1>
                </div>
            </NavLink>
            <div className="link-website">
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Home</NavLink>
                    </li>

                    {cookie == null && cookie == undefined ? (
                        <>
                            <li>
                                <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")} >Login</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/profile" className={(nav) => (nav.isActive ? "nav-active" : "")} >Profile</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleClick} className={(nav) => (nav.isActive ? "nav-active" : "")} >Deconnecter</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

        </nav>
    )
}