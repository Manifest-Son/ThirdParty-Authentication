// import React from 'react'
import {GoogleButton} from 'react-google-button'

function Signin() {
  return (
    <section>
        <div className='signup_container'>
           <div className='signup_wrapper'>
           <h1>Sign Up</h1>
            <form>
                <div className='email_section'>
                <label htmlFor="emailAdd">Email Address:</label>
                <input type="email" id="emailAdd"/>
                </div>
                <div className='password_section'>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"/>
                </div>
                <button>Sign Up</button>
                <h3>Don&#x27;t have an account? <a href="">Sign In</a></h3>
            </form>
           </div>
        </div>
        <GoogleButton />
        
    </section>
  )
}

export default Signin