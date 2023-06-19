import axios from 'axios'
import React, { useEffect, useState, createContext } from 'react'
import { useContext } from 'react'
import { authContext } from './AuthContext'
import { useReducer } from 'react'
import { initialPostData, postReducerFunc } from '../Reducers/PostReducer'


export const postContext = createContext()
const PostContextWrapper = ({ children }) => {
  const { setauthLoader } = useContext(authContext)
  const [postState, postDispatch] = useReducer(postReducerFunc, initialPostData)

  const fetchPosts = async () => {
    try {
      const { data: { posts }, status } = await axios.get("api/posts")
      if (status === 200) {
        postDispatch({ type: "GET_POST", payload: posts })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setauthLoader(false)
    }

  }
  useEffect(() => {
    setauthLoader(true)
    setTimeout(() => {
      fetchPosts()
    }, 1000);
  }, [])

  const filterTrending = postState.filterBytrending ? [...postState.allPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount) : postState.allPosts

  const filterByDate = postState.filterByDate ? [...filterTrending].sort((a, b) => new Date(b.createdAt.slice(0, 10)) - new Date(a.createdAt.slice(0, 10))) : filterTrending

  console.log(postState)
  return (
    <postContext.Provider value={{ postState, postDispatch, filterByDate }}>{children}</postContext.Provider>
  )
}

export default PostContextWrapper