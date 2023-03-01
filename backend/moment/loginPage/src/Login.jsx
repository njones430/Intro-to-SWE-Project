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
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="yourPW" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/*This will let us switch between pages register and login */}
                <div>
                <a href="/signin" rel="noopener noreferrer" class="google btn">
                <GoogleButton/>
                </a>
                </div>
            {/*<li>
            <Link to="/signin"> </Link>
            <GoogleButton/>
            </li>
            <Outlet />
            */}
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
