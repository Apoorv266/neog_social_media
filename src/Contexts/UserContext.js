import axios from 'axios'
import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react'
import { initialUserData, userReducerFunc } from '../Reducers/UsersReducer'
import { authContext } from './AuthContext'
import { useState } from 'react'

export const userContext = createContext()

const UserContextWrapper = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducerFunc, initialUserData)
  const { userToken,setuserData,setauthLoader } = useContext(authContext)
  const [userSearchField, setuserSearchField] = useState("")

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

  const handleEditUserFunc  = async (editInputField) =>{
    try {
      const {firstName, lastName, bio, website, backgroundImage, avatarUrl} = editInputField
      const {
        status,
        data: { user },
      }  =  await axios.post(
        "/api/users/edit",
        { userData: {firstName,lastName, bio, website,backgroundImage,  avatarUrl } },
        { headers: { authorization: userToken } })
    
        if (status === 201) {
          setuserData(user)
          localStorage.setItem("user", JSON.stringify(user))
        }
    } catch (error) {
      console.log(error)
    }
  }

  const getUserAvatarImg = (currUserName) =>{
    const obj = userState?.allUsers.find((item) => item.username === currUserName)
    return obj?.avatarUrl
  }



  const filterUserFunc = () =>{
    const filterUser = userSearchField ? userState.allUsers.filter((item) => item.username.toLowerCase().includes(userSearchField.toLowerCase())) :userState.allUsers
    return filterUser
  }

  return (
    <userContext.Provider value={{ userState,unFollowFunc , followUsers, getUserAvatarImg , getUserDetailsFunc,userSearchField , setuserSearchField, filterUserFunc, handleEditUserFunc }}>{children}</userContext.Provider>
  )
}

export default UserContextWrapper