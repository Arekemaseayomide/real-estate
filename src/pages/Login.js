import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="heading">Login</h1>
        <p>Fill in your login details</p>
        <div className="input-group">
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
        <button className="button" >Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
