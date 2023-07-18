import React from "react";
import "../../Styles/UserDetails.css";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { userContext } from "../../Contexts/UserContext";
import { useState } from "react";
import EditProfileModal from "../../Components/Modal/EditProfileModal/EditProfileModal";
import Modal from "../../Components/Modal/FollowListModal/Modal";


const UserDetails = ({ userProfileData, postLen }) => {
  const { followers, following, bio, firstName, lastName, username, website, createdAt, avatarUrl, _id, backgroundImage } = userProfileData
  const { userData } = useContext(authContext)
  const { followUsers, unFollowFunc } = useContext(userContext)
  const [followModal, setfollowModal] = useState({
    open: false,
    data: [],
    title: ""
  })
  const [editModal, seteditModal] = useState(false)

  const isUserFollowed = (username) => {
    const followedUser = userData.following.find(item => item.username === username)
    return followedUser
  }
  return (
    <>
        <img src={backgroundImage} alt="" srcset="" width={"100%"}
          height={"200px"}
          style={{
            backgroundSize: "cover",
            objectFit: "cover",
          }}/>
      <div className="main-details">
        <img
          src={`${avatarUrl}`}
          alt=""
          srcSet=""
          width={"90px"}
          height={"90px"}
          style={{
            borderRadius: "50%",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
        <div className="login-user-details">
          <p><strong>Name : </strong>{`${firstName} ${lastName}`}</p>
          <p><strong>Username : </strong>@{`${username}`}</p>
          {bio && <p><strong>Bio : </strong>{bio}</p>}
          {website && <p><strong>Site : </strong><a href={website} target="_blank">{website}</a></p>}
          <p><strong>Joined on :</strong> {createdAt?.slice(0, 10)}</p>
        </div>
        {userData.username === username ? <button className="edt-profile-btn" onClick={()=>seteditModal(true)}>Edit profile</button> : isUserFollowed(username) ? <button className="edt-profile-btn" onClick={() => unFollowFunc(_id)}>Unfollow</button> : <button className="edt-profile-btn" onClick={() => followUsers(_id)}>Follow</button>}
      </div>

      <div className="stats-main">
        <h3>{postLen?.length} Posts</h3>
        
        <h3 onClick={() => setfollowModal({
          open: true,
          data: followers,
          title: "Followers List"
        })} style={{cursor : "pointer"}}>{followers?.length} followers</h3>


        <h3 onClick={() => setfollowModal({
          open: true,
          data: following,
          title: "Following List"
        })} style={{cursor : "pointer"}}>{following?.length} following</h3>


      </div>
      {followModal.open && <Modal modalData={followModal} setfollowModal={setfollowModal} isUserFollowed={isUserFollowed}/>}
      {editModal && <EditProfileModal seteditModal={seteditModal}/>}
    </>
  );
};

export default UserDetails;
