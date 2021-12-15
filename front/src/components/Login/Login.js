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
        <>
        
        <GoogleReCaptchaProvider reCaptchaKey='6LdHx5wdAAAAAL4aNiwi-5K9ZJNlr7BXME9Rn8n-'>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
            <form className='formLogin' onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input type="email" placeholder="Email or Phone" onChange={e => setUserName(e.target.value)}/>
                <label for="password">Password</label>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <div>
                <button type="submit" className='button-login'>Submit</button>
                <GoogleReCaptcha
                onVerify={token => {
                    setcaptchaToken(token)
                }}
                />
                </div>
            </form>
        </GoogleReCaptchaProvider>
        </>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;