import React from 'react'
import { useContext } from 'react';
import { postContext } from '../../Contexts/PostContext';
import PostCard from '../PostCard';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { userContext } from '../../Contexts/UserContext';
import { useEffect } from 'react';
import { authContext } from '../../Contexts/AuthContext';

const Profile = () => {
    const {username} = useParams()
    const { postState , getUserPostFunc} = useContext(postContext);
    const {userState, getUserDetailsFunc} = useContext(userContext);
    const {userData, authLoader, setauthLoader} = useContext(authContext)

  
    const userProfileData = userState?.allUsers.find((item) => item.username === username)

    useEffect(() => {
        setauthLoader(true)
        setTimeout(() => {
            getUserDetailsFunc(userProfileData._id)
            getUserPostFunc(userProfileData.username)
        }, 500);
    }, [userData, username])
 

    
    return (
        <div className="post-container">
            
         {authLoader ? (
          <div className="loader-img-main">
            <img src={require("../../Images/loader2.gif")} alt="" srcset="" width={"50px"}/>
          </div>
        ) : (
          <>
             
             <UserDetails  userProfileData={userState.profileUser} postLen = {postState?.userProfilePosts}/>
            {postState?.userProfilePosts?.map((item) => {
                const currPost = postState?.allPosts?.find(({_id}) => _id === item)
              return <PostCard item={currPost} />;
            })}
          </>
        )}

        </div>
    )
}

export default Profile