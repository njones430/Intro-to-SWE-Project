import React, { useState } from "react";
import GoogleButton from 'react-google-button'
import { Outlet, Link } from 'react-router-dom'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>StudentSaver</h1>
            <h2>Login</h2>
            {/*This will let us switch between pages register and login */}
                <div>
                <a href="http://localhost:3000/google/login" rel="noopener noreferrer" class="google btn" className="google-btn">
                <GoogleButton data-testid="googleBtn" id ="googleBtn"/>
                </a>
                </div>
        </div>
    )
}
