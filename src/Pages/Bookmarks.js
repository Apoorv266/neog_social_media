import React from 'react'
import { useContext } from 'react'
import PostCard from '../Components/PostCard'
import { postContext } from '../Contexts/PostContext'

const Bookmarks = () => {
  const { postState } = useContext(postContext)
  const { allPosts, bookmarkPosts } = postState
  
  return (
   <div className="post-container">
      {bookmarkPosts.length > 0  ? bookmarkPosts?.map((bookmarkItem) => {
        const item = allPosts.find(({_id}) => _id === bookmarkItem)
        return <PostCard item={item} fromBookmarks/>;
      }) : <h1 className="empty-txt">No bookmarked Posts !</h1>}
    </div> 
  )
}

export default Bookmarks