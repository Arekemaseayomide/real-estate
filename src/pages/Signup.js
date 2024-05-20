import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="login">
    <div className="login-container">
      <h1 className="heading">Sign Up</h1>
      <p>Fill in the following details</p>
      <div className="input-group">
        <div className="input-item">
          <label className="label">First name</label>
          <input type="text" placeholder="Enter your first name"></input>
        </div>
        <div className="input-item">
          <label className="label">Last name</label>
          <input type="text" placeholder="Enter your last name"></input>
        </div>
        <div className="input-item">
          <label className="label">Phone number</label>
          <input type="number" placeholder="Enter your phone number"></input>
        </div>
        <div className="input-item">
          <label className="label">Email</label>
          <input type="text" placeholder="Enter your email"></input>
        </div>
        <div className="input-item">
          <label >Password</label>
          <input type="password" placeholder="Enter your password"></input>
        </div>
      </div>
      <Link to="/">
      <button className="button">Sign up</button>
      </Link>
    </div>
  </div>
  )
}

export default Signup