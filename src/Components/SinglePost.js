import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { postContext } from '../Contexts/PostContext'
import PostCard from './PostCard'
import CommentSection from './CommentSection'

const SinglePost = () => {
    const {postId} = useParams()
    const {postState} = useContext(postContext)
    const postObj = postState.allPosts?.find((item) => item._id === postId)
    const {comments, _id} = postObj
  return (
    <div className="post-container">
    <PostCard item={postObj}/>
    <CommentSection comments={comments} postId={ _id}/>
    </div>
  )
}

export default SinglePost