import React from "react";
import "../Styles/Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-img">
        <img
          src={require("../assets/banner.png")}
          alt=""
          srcset=""
          width={"600px"}
          className="vert-move"
        />
      </div>
      <div className="login-details">
        <h3>Username:</h3>
        <input type="text" name="" id="" />
        <h3>Password:</h3>
        <input type="password" name="" id="" />
        <button className="login-btn">Login</button>
        <button className="login-btn">Login as guest !</button>
        <p>login for first time? <Link className="link">Sign up Here
        </Link></p>
      </div>
    </div>
  );
};

export default Login;
