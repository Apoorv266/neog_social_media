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
    const followUserList = userData?.following?.reduce((acc, curr) => [...acc, curr.username], [])

    const loginFunc = async (username, password) => {
        try {
            const { data: { encodedToken, foundUser }, status } = await axios.post("/api/auth/login", {
                username,
                password
            })
            if (status === 200 || status === 201) {
                setloader(true)
                setuserData(foundUser)
                setuserToken(encodedToken)
                localStorage.setItem("token", JSON.stringify(encodedToken))
                localStorage.setItem("user", JSON.stringify(foundUser))
                ToastSuccess("Sign In successfully !")
                setTimeout(() => {
                    if (location.state === null) {
                        navigate("/");
                    } else {
                        navigate(location?.state?.from?.pathname);
                    }
                }, 1500);

            }
        } catch (error) {
            const {
                response: { status },
            } = error;

            if (status === 404) {
                ToastError("The username you have entered is not registered.");
            } else if (status === 401) {
                ToastError(
                    "The credentials you entered are invalid. Please try again."
                );
            } else {
                ToastError("Something went wrong");
            }
            console.log(error)
        } finally {
            setloader(false)
        }
    }

    const signupFunc = async (firstName, lastName, username, password) => {
        try {
            const avatarUrl = "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg"
            const backgroundImage = "https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-106439.jpg"
            const { data: { encodedToken, createdUser }, status } = await axios.post("api/auth/signup", {
                firstName,
                lastName,
                username,
                password,
                avatarUrl,
                backgroundImage
            })

            if (status === 200 || status === 201) {
                setloader(true)
                setuserData(createdUser)
                setuserToken(encodedToken)
                localStorage.setItem("token", JSON.stringify(encodedToken))
                localStorage.setItem("user", JSON.stringify(createdUser))
                ToastSuccess("Sign Up successfully !")
                setTimeout(() => {
                    navigate("/");
                    setloader(false)
                }, 1000);

            }
        } catch (error) {
            const {
                response: { status },
            } = error;
            if (status === 422) {
                ToastError("Username Already Exists. Please choose another one.");
            } else {
                ToastError("Something went wrong");
            }
        } finally {
            setloader(false)
        }
    }

    const handleLogout = () => {
        setuserToken(null);
        setuserData(null);
        localStorage.removeItem("postState")
        localStorage.removeItem("userState")
        localStorage.clear()
        setloader(true);
        setTimeout(() => {
            setloader(false);
            navigate("/login")
        }, 1000);
        ToastSuccess("Logged Out successfully !")
    }
    return (
        <authContext.Provider value={{ userToken, loginFunc, userData, handleLogout, loader, signupFunc, setauthLoader, authLoader, followUserList, setuserData }}>{children}</authContext.Provider>
    )
}

export default AuthContextWrapper