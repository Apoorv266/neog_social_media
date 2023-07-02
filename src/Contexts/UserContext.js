import axios from 'axios'
import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react'
import { initialUserData, userReducerFunc } from '../Reducers/UsersReducer'
import { authContext } from './AuthContext'

export const userContext = createContext()

const UserContextWrapper = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducerFunc, initialUserData)
  const { userToken,setuserData,setauthLoader } = useContext(authContext)

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


  const unFollowFunc = async (userId) =>{
    try {
      const {status , data : {user}} = await axios.post(
        `/api/users/unfollow/${userId}`,
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

  const getUserDetailsFunc = async (userId) =>{
    try {
      const {status , data : {user}} = await axios.get(`/api/users/${userId}`)
      if (status === 200) {
        userDispatch({ type: "PROFILE_USER", payload: user })
      }
    } catch (error) {
      console.log(error)
    }finally{
      setauthLoader(false)
    }
  }

  const getUserAvatarImg = (currUserName) =>{
    const obj = userState.allUsers.find((item) => item.username === currUserName)
    return obj.avatarUrl
  }

  return (
    <userContext.Provider value={{ userState,unFollowFunc , followUsers, getUserAvatarImg , getUserDetailsFunc }}>{children}</userContext.Provider>
  )
}

export default UserContextWrapper