import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useReducer } from 'react'
import { initialUserData, userReducerFunc } from '../Reducers/UsersReducer'

export const userContext = createContext()

const UserContextWrapper = ({ children }) => {

const [userState, userDispatch] = useReducer(userReducerFunc, initialUserData)
  const fetchUsers = async () => {
    try {
      const { data: { users }, status } = await axios.get("api/users")
      if (status === 200) {
        userDispatch({type: "GET_USERS" , payload: users})
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

  return (
    <userContext.Provider value={{userState}}>{children}</userContext.Provider>
  )
}

export default UserContextWrapper