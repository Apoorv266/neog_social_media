import axios from 'axios'
import React, { createContext, useState } from 'react'

export const authContext = createContext()
const AuthContextWrapper = ({ children }) => {
    const [userData, setuserData] = useState({})
    const [userToken, setuserToken] = useState("")

    const loginFunc = async (username, password) => {
        try {
            const {data : {encodedToken, foundUser}, status} = await axios.post("/api/auth/login", {
                username, 
                password 
               })
               if (status === 200) {
                setuserData(foundUser)
                setuserToken(encodedToken)
                localStorage.setItem("token", JSON.stringify(encodedToken))
                localStorage.setItem("user", JSON.stringify(foundUser))
               }
        } catch (error) {
            console.log(error)
        }
       
    }
    return (
        <authContext.Provider value={{ userToken, loginFunc }}>{children}</authContext.Provider>
    )
}

export default AuthContextWrapper