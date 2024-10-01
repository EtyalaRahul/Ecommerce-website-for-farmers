import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='your password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox"  name='' id=''/>
          <p> &nbsp;&nbsp;By Continuing i agree to use & privacy policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
