import React from "react";
import "../Styles/Login.css"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-img">
        <img
          src={require("../assets/banner.png")}
          alt=""
          srcset=""
          width={"600px"}
        />
      </div>
      <div className="login-details">
        <h3>Username:</h3>
        <input type="text" name="" id="" />
        <h3>Password:</h3>
        <input type="password" name="" id="" />
        <button className="login-btn">Login</button>
        <button className="login-btn">Login as guest !</button>
        <p>login for first time?</p>
      </div>
    </div>
  );
};

export default Login;
