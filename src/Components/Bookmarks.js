import React from 'react'
import { useContext } from 'react'
import PostCard from './PostCard'
import { postContext } from '../Contexts/PostContext'

const Bookmarks = () => {
  const { postState } = useContext(postContext)
  const { allPosts, bookmarkPosts } = postState
  
  return (
   bookmarkPosts.length > 0 ?<div className="post-container">
      {bookmarkPosts?.map((bookmarkItem) => {
        const item = allPosts.find(({_id}) => _id === bookmarkItem)
        return <PostCard item={item} />;
      })}
    </div> : <h1 style={{color: "white"}}>No bookmarked Posts !</h1>
  )
}

export default Bookmarks