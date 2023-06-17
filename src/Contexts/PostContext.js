import axios from 'axios'
import React, { useEffect, useState , createContext} from 'react'


export const postContext = createContext()
const PostContextWrapper = ({children}) => {
    const [allPost, setallPost] = useState([])

    const fetchPosts = async () =>{
        const {data: {posts}, status} = await axios.get("api/posts")
        if (status === 200) {
            setallPost(posts)
        }
    }
    useEffect(() => {
    fetchPosts()
    }, [])
    
  return (
    <postContext.Provider value={{allPost}}>{children}</postContext.Provider>
  )
}

export default PostContextWrapper