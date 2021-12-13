import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from "react-google-recaptcha-v3"

import './Login.css';

const loginUser = async (credentials) => {
    return fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({ setToken }) =>{
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();
    const [captchaToken, setcaptchaToken] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password,
          captchaToken,
        });
        setToken(token);
}
    
    return(
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <GoogleReCaptchaProvider reCaptchaKey='6LdHx5wdAAAAAL4aNiwi-5K9ZJNlr7BXME9Rn8n-'>
            <form onSubmit={handleSubmit}>
                <label>
                <p>Username</p>
                <input type="email" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                <button type="submit">Submit</button>
                <GoogleReCaptcha
                onVerify={token => {
                    setcaptchaToken(token)
                }}
                />
                </div>
            </form>
        </GoogleReCaptchaProvider>
        </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;