import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useReducer } from 'react'
import { initialUserData, userReducerFunc } from '../Reducers/UsersReducer'
import { authContext } from './AuthContext'

export const userContext = createContext()

const UserContextWrapper = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducerFunc, initialUserData)
  const { userToken,setuserData } = useContext(authContext)

  const fetchUsers = async () => {
    try {
      const { data: { users }, status } = await axios.get("api/users")
      if (status === 200) {
        userDispatch({ type: "GET_USERS", payload: users })
      }
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers()
    }, 1000);
  }, [])


  const followUsers = async (userId) => {
    try {
      const {status , data : {user}} = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        { headers: { authorization:userToken } }
      );
      if (status === 200 || status === 201) {
        setuserData(user)
        localStorage.setItem("user", JSON.stringify(user))
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <userContext.Provider value={{ userState, followUsers }}>{children}</userContext.Provider>
  )
}

export default UserContextWrapper