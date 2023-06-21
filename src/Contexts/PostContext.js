import axios from 'axios'
import React, { useEffect, useState, createContext } from 'react'
import { useContext } from 'react'
import { authContext } from './AuthContext'
import { useReducer } from 'react'
import { initialPostData, postReducerFunc } from '../Reducers/PostReducer'


export const postContext = createContext()
const PostContextWrapper = ({ children }) => {
  const { setauthLoader, userToken } = useContext(authContext)
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

  // post like
  const likePostFunc = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: userToken },
        }
      );

      if (status === 201) {
        postDispatch({ type: "LIKE_POST", payload: posts })
      }
    } catch (error) {
      console.log(error)
    }
  }

  //  dislike post
  const dislikePostFunc = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: userToken },
        }
      );

      if (status === 201) {
        postDispatch({ type: "DISLIKE_POST", payload: posts })
      }
    } catch (error) {
      // const {
      //   response: { status },
      // } = error;

      // if (status === 400) {
      //   console.log("post already disliked")
      // }
      // else {
        console.log("something went wrong")
      // }
    }
  
  }



  const isPostLiked = (currPost, userData) => {
    return currPost?.likes.likedBy.find((likeUser) => likeUser.username === userData.username);
  }

  const isPostDisliked = (currPost, userData) =>{
    return currPost?.likes.dislikedBy.find((likeUser) => likeUser.username === userData.username);
  }

  const filterTrending = postState.filterBytrending ? [...postState.allPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount) : postState.allPosts

  const filterByDate = postState.filterByDate ? [...filterTrending].sort((a, b) => new Date(b.createdAt.slice(0, 10)) - new Date(a.createdAt.slice(0, 10))) : filterTrending

  return (
    <postContext.Provider value={{ postState, postDispatch, filterByDate, likePostFunc, isPostLiked, dislikePostFunc, isPostDisliked }}>{children}</postContext.Provider>
  )
}

export default PostContextWrapper