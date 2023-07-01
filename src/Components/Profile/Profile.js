import React from 'react'
import { useContext } from 'react';
import { authContext } from '../../Contexts/AuthContext';
import { postContext } from '../../Contexts/PostContext';
import PostCard from '../PostCard';
import UserDetails from './UserDetails';

const Profile = () => {
    const { userData } = useContext(authContext);
    const { postState } = useContext(postContext)

    const loggedUserPost = postState?.allPosts.filter((item) => item.username === userData.username)
    return (
        <div className="post-container">
            <UserDetails loggedUserPost={loggedUserPost}/>
            {loggedUserPost?.map((item) => {
                return <PostCard item={item} />;
            })}
        </div>
    )
}

export default Profile