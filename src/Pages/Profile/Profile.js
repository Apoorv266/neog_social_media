import React from 'react'
import { useContext } from 'react';
import { postContext } from '../../Contexts/PostContext';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { userContext } from '../../Contexts/UserContext';
import { useEffect } from 'react';
import { authContext } from '../../Contexts/AuthContext';
import PostCard from '../../Components/PostCard';

const Profile = () => {
    const {username} = useParams()
    const { postState , getUserPostFunc} = useContext(postContext);
    const {userState, getUserDetailsFunc} = useContext(userContext);
    const {userData, authLoader, setauthLoader} = useContext(authContext)
  
    const userProfileData =userData?.username === username  ? userData : userState?.allUsers.find((item) => item.username === username)

    const profileDetails = userData.username === username ?userData : userState?.profileUser


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
             
             <UserDetails  userProfileData={profileDetails} postLen = {postState?.userProfilePosts}/>
            {postState?.userProfilePosts.length > 0 ?postState?.userProfilePosts?.map((postId) => {
                const currPost = postState?.allPosts?.find(({_id}) => _id === postId)
              return <PostCard item={currPost}/>;
            }) : <h1 className="empty-txt">No posts to display !</h1>}
          </>
        )}

        </div>
    )
}

export default Profile