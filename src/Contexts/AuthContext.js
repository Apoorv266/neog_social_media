import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastError, ToastSuccess } from '../Components/ToastComponent/ToastContainer'

export const authContext = createContext()
const AuthContextWrapper = ({ children }) => {

    const storageUser = JSON.parse(localStorage.getItem("user"))
    const storageToken = JSON.parse(localStorage.getItem("token"))
    const [userData, setuserData] = useState(storageUser)
    const [userToken, setuserToken] = useState(storageToken)
    const [loader, setloader] = useState(false)
    const [authLoader, setauthLoader] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()
    const followUserList = userData?.following.reduce((acc, curr) => [...acc, curr.username], [])

    const loginFunc = async (username, password) => {
        try {
            setloader(true)
            const { data: { encodedToken, foundUser }, status } = await axios.post("/api/auth/login", {
                username,
                password
            })
            if (status === 200 || status === 201) {
                ToastSuccess("Sign In successfully !")
                setuserData(foundUser)
                setuserToken(encodedToken)
                localStorage.setItem("token", JSON.stringify(encodedToken))
                localStorage.setItem("user", JSON.stringify(foundUser))
                setTimeout(() => {
                    if (location.state === null) {
                        navigate("/");
                    } else {
                        navigate(location?.state?.from?.pathname);
                    }
                    setloader(false)
                }, 2000);
               
            }
        } catch (error) {
            ToastError("Some error occured !")
        }
    }

    const signupFunc = async (username, password, fullname) => {
        try {
            setloader(true)
            const { data: { encodedToken, createdUser }, status } = await axios.post("api/auth/signup", {
                username,
                password,
                fullname
            })

            if (status === 200 || status === 201) {
                ToastSuccess("Signup successfully !")
                setuserData(createdUser)
                setuserToken(encodedToken)
                localStorage.setItem("token", JSON.stringify(encodedToken))
                localStorage.setItem("user", JSON.stringify(createdUser))
                setTimeout(() => {
                    navigate("/");
                    setloader(false)
                }, 1000);
            
            }
        } catch (error) {
            ToastError("Some error occured !")
        }
    }

    const handleLogout = () => {
        setuserToken(null);
        setuserData(null);
        localStorage.clear()
        setTimeout(() => {
            setloader(true);
            navigate("/login")
        }, 1000);
        setTimeout(() => {
            ToastSuccess("Logged Out successfully !")
            setloader(false);
        }, 1500);
    }
    return (
        <authContext.Provider value={{ userToken, loginFunc, userData, handleLogout, loader, signupFunc, setauthLoader, authLoader, followUserList ,setuserData}}>{children}</authContext.Provider>
    )
}

export default AuthContextWrapper