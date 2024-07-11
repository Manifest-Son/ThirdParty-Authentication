// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GoogleButton } from 'react-google-button';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section>
            <div className='login_container'>
                <div className='login_wrapper'>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='email_section'>
                            <label htmlFor="emailAdd">Email Address:</label>
                            <input type="email" id="emailAdd" />
                        </div>
                        <div className='password_section'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" />
                        </div>
                        <button type="submit">Log in</button>
                        <h3>Don&#x27;t have an account? <a href="">Sign In</a></h3>
                    </form>
                </div>
                <div className='thirdparty_logins'>
                    <GoogleButton onClick={handleButtonClick} />
                </div>
            </div>
        </section>
    );
}

export default Login;
