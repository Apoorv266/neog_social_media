import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { postContext } from '../Contexts/PostContext'
import PostCard from './PostCard'
import CommentSection from './CommentSection'
import { useEffect } from 'react'
import { userContext } from '../Contexts/UserContext'

const SinglePost = () => {
    const {postId} = useParams()
  
    const {postState} = useContext(postContext)
    const {userState} = useContext(userContext)
    const postObj = postState?.allPosts?.find((item) => item._id === postId)
    const {comments, _id} = postObj

    useEffect(() => {
      localStorage.setItem("postState", JSON.stringify(postState))
      localStorage.setItem("userState", JSON.stringify(userState))
      }, [])
  return (
    <div className="post-container">
    <PostCard item={postObj} fromsinglePost/>
    <CommentSection comments={comments} postId={ _id}/>
    </div>
  )
}



export default SinglePost