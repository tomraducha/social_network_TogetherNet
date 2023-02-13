import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './index.scss'
export default function Login() {
    const [signUpModal, setSignUpModal] = useState(false)
    const [signInModal, setSignInModal] = useState(true)

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true)
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true)
        }
    }


    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    {/* au onCLick tu me lances handleModale */}
                    <li
                        onClick={handleModals}
                        id="register"
                        className={signUpModal ? "active-btn" : null}>S'inscrire
                    </li>
                    <li
                        onClick={handleModals}
                        id="login"
                        className={signInModal ? "active-btn" : null}>Se connecter
                    </li>
                </ul>
                {/* si signUpModal est true alors tu m'affiches SignUpForm */}
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>

        </div>
    )
}