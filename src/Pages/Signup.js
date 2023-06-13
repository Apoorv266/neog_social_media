import React, { useState, useContext } from "react";
import "../Styles/Login.css"
import { Link } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";


const Signup = () => {
    const { signupFunc } = useContext(authContext);
    const [signupInput, setsignupInput] = useState({
        name : "",
        username: "",
        password: ""
    })

    const handleLoginBtn = () => {
        signupFunc(signupInput.username, signupInput.password,signupInput.name )
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
                <h3>FullName:</h3>
                <input type="text" name="" id="name" value={signupInput.name} onChange={(e) => setsignupInput((state) => ({ ...state, name: e.target.value }))} />


                <h3>Username:</h3>
                <input type="text" name="" id="username" value={signupInput.username} onChange={(e) => setsignupInput((state) => ({ ...state, username: e.target.value }))} />
                <h3>Password:</h3>
                <input type="password" name="" id="password" value={signupInput.password} onChange={(e) => setsignupInput((state) => ({
                    ...state, password: e.target.value
                }))} />
                <button className="login-btn" onClick={handleLoginBtn}>Signup</button>
                <p>Already have an acount? <Link className="auth-link" to={"/login"}> Login Here
                </Link></p>
            </div>
        </div>
    );
};

export default Signup;
