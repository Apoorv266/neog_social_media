import axios from 'axios'
import React, { useEffect, createContext, useState } from 'react'
import { useContext } from 'react'
import { authContext } from './AuthContext'
import { useReducer } from 'react'
import { initialPostData, postReducerFunc } from '../Reducers/PostReducer'
import { ToastError, ToastSuccess } from '../Components/ToastComponent/ToastContainer'


const getPostData = () =>{
  const postState= JSON.parse(localStorage.getItem("postState"))
  if (postState) {
    return JSON.parse(localStorage.getItem("postState"))
  }else{
    return initialPostData
  }
}
export const postContext = createContext()
const PostContextWrapper = ({ children }) => {
  const { setauthLoader, userToken } = useContext(authContext)
  const [postState, postDispatch] = useReducer(postReducerFunc, getPostData())
  const [editpostModal, seteditpostModal] = useState(false)

  useEffect(() => {
  localStorage.setItem("postState", JSON.stringify(postState))
  }, [postState])
  
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

  const getbookMarkPosts = async () => {
    try {
      const { status, data: { bookmarks } } = await axios.get("api/users/bookmark",
        {
          headers: { authorization: userToken },
        })
      if (status === 200) {
        postDispatch({ type: "GET_BOOKMARK", payload: bookmarks })
      }
    } catch (error) {
      ToastError("Some error occured !")
    }

  }
  useEffect(() => {
    setauthLoader(true)
      setTimeout(() => {
        fetchPosts()
        if (userToken) {
          getbookMarkPosts()
        }
      }, 1000);
  }, [userToken])


  const createPostFunc = async (content, mediaURL, mediaAlt) => {
    try {
      const { status, data: { posts } } = await axios.post("/api/posts",
        { postData: { content, mediaURL, mediaAlt } },
        { headers: { authorization: userToken } })

      if (status === 201) {
        postDispatch({ type: "ADD_POST", payload: posts })
        ToastSuccess("Post successfully created !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }

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
        ToastSuccess("Post liked successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
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
        ToastSuccess("Post disliked successfully !")
      }
    } catch (error) {
      const {
        response: { status },
      } = error;

      if (status === 400) {
        ToastError("Post must have atleast 1 like!")
      }
      else {
        ToastError("Some error occured !")
      }
    }

  }


  const deletePostFunc = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.delete(`api/posts/${postId}`, {
        headers: { authorization: userToken },
      })

      if (status === 201) {
        postDispatch({ type: "DELETE_POST", payload: posts })
        ToastSuccess("Post deleted successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }


  const bookmarkFunc = async (postId) => {
    try {
      const { status, data: { bookmarks } } = await axios.post(`/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: userToken }
        })
      if (status === 200) {
        postDispatch({ type: "ADD_BOOKMARK", payload: bookmarks })
        ToastSuccess("Post bookmarked successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }



  const removebookmarkFunc = async (postId) => {
    try {
      const { status, data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: userToken }
        })
      if (status === 200) {
        postDispatch({ type: "REMOVE_BOOKMARK", payload: bookmarks })
        ToastSuccess("Bookmark removed successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }

  const addCommentFunc = async (postId, commentData) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData: commentData },
        { headers: { authorization: userToken } }
      );
      if (status === 201) {
        postDispatch({ type: "ADD_COMMENT", payload: posts })
        ToastSuccess("Comment added successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }


  const deleteCommentFunc = async (postId, commentId) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(`/api/comments/delete/${postId}/${commentId}`, {}, { headers: { authorization: userToken } })

      if (status === 201) {
        postDispatch({ type: "DELETE_COMMENT", payload: posts })
        ToastSuccess("Comment deleted successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }

  }


  const getUserPostFunc = async (username) => {
  
    try {
      if (username) {
        const { status, data: { posts } } = await axios.get(`/api/posts/user/${username}`)
      if (status === 200) {
        const currPostId = posts.map((item) => item._id)
        postDispatch({ type: "ADD_USER_POST", payload: currPostId })
      }
      }
      
    } catch (error) {
      ToastError("Some error occured !")
    } finally {
      setauthLoader(false)
    }
  }

  const editPostFunc = async (postId, content, mediaURL, mediaAlt) => {
    try {
      const { status, data: { posts } } = await axios.post(`/api/posts/edit/${postId}`,
      { postData: { content, mediaURL, mediaAlt } },
      { headers: { authorization: userToken } })
      if (status === 201) {
        postDispatch({ type: "EDIT_POST", payload: posts });
        ToastSuccess("Post updated successfully !")
      }
    } catch (error) {
      ToastError("Some error occured !")
    }
  }

 

  const handleClickEdit = (postId) => {
    const { content, mediaAlt , mediaURL} = postState.allPosts.find((item) => item._id === postId)
    const obj = { content: content, fileTitle: mediaAlt, id: postId, media: null, fileUrl: mediaURL }
    postDispatch({ type: "POST_CONTENT", payload: obj })
  }

  const isPostLiked = (currPost, userData) => {
    return currPost?.likes.likedBy.find((likeUser) => likeUser.username === userData.username);
  }

  const isPostDisliked = (currPost, userData) => {
    return currPost?.likes.dislikedBy.find((dislikeUser) => dislikeUser.username === userData.username);
  }

  const isPostBookmarked = (eachPostId) => postState?.bookmarkPosts?.find(item => item === eachPostId)

  const filterTrending = postState.filterBytrending ? [...postState.allPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount) : postState.allPosts

  const filterByDate = postState.filterByDate ? [...filterTrending].sort((a, b) => new Date(b.createdAt.slice(0, 10)) - new Date(a.createdAt.slice(0, 10))) : filterTrending

  return (
    <postContext.Provider value={{ postState, postDispatch, filterByDate, likePostFunc, isPostLiked, dislikePostFunc, isPostDisliked, deletePostFunc, bookmarkFunc, removebookmarkFunc, isPostBookmarked, addCommentFunc, deleteCommentFunc, getUserPostFunc, createPostFunc, editpostModal, seteditpostModal, handleClickEdit, editPostFunc }}>{children}</postContext.Provider>
  )
}

export default PostContextWrapper