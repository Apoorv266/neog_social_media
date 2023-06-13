import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const authContext = createContext()
const AuthContextWrapper = ({ children }) => {

    const storageUser = JSON.parse(localStorage.getItem("user"))
    const storageToken = JSON.parse(localStorage.getItem("token"))
    const [userData, setuserData] = useState(storageUser)
    const [userToken, setuserToken] = useState(storageToken)
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const loginFunc = async (username, password) => {
        try {
            setloader(true)
            const { data: { encodedToken, foundUser }, status } = await axios.post("/api/auth/login", {
                username,
                password
            })
            if (status === 200 || status === 201) {
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
            console.log(error)
        }
    }

    const signupFunc  = async (username, password, fullname) =>{
        try {
            setloader(true)
            const {data: { encodedToken, createdUser }, status} = await axios.post("api/auth/signup",{
                username, 
                password, 
                fullname
            })

            if (status === 200 || status === 201) {
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
            console.log(error)
        }
    }

    const handleLogout = () =>{
        setloader(true);
        setuserToken(null);
        setuserData(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setTimeout(() => {
          setloader(false);
          navigate("/login")
        }, 2000);
    }
    return (
        <authContext.Provider value={{ userToken, loginFunc, userData , handleLogout, loader, signupFunc}}>{children}</authContext.Provider>
    )
}

export default AuthContextWrapper