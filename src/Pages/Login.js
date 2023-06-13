import React, { useState ,useContext} from "react";
import "../Styles/Login.css"
import { Link } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";


const Login = () => {
  const {loginFunc} = useContext(authContext);
  const [loginInput, setloginInput] = useState({
    username : "",
    password :""
  })
  
  const handleLoginBtn = () =>{
    loginFunc(loginInput.username , loginInput.password)
  }

  const handleGuestLoginBtn = () =>{
    setloginInput({username : "adarshbalika", password: "adarshBalika123"})
    loginFunc("adarshbalika", "adarshBalika123")
  }
  return (
    <div className="login-container">
      <div className="login-img">
        <img
          src={require("../assets/banner.png")}
          alt=""
          srcSet=""
          width={"600px"}
          className="vert-move"
        />
      </div>
      <div className="login-details">
        <h3>Username:</h3>
        <input type="text" name="" id="username" value={loginInput.username} onChange={(e)=>setloginInput((state) => ({...state,username : e.target.value }))}/>
        <h3>Password:</h3>
        <input type="password" name="" id="password" value={loginInput.password} onChange={(e)=>setloginInput((state) => ({
          ...state, password: e.target.value
        }))}/>
        <button className="login-btn" onClick={handleLoginBtn}>Login</button>
        <button className="login-btn" onClick={handleGuestLoginBtn}>Login as guest !</button>
        <p>login for first time? <Link className="link">Sign up Here
        </Link></p>
      </div>
    </div>
  );
};

export default Login;
