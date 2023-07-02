import React from "react";
import "../../Styles/UserDetails.css";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { userContext } from "../../Contexts/UserContext";

const UserDetails = ({ userProfileData, postLen}) => {
  const {followers,following , bio, firstName, lastName, username, website, createdAt, avatarUrl, _id} = userProfileData
const {userData} = useContext(authContext)
const { followUsers , unFollowFunc} = useContext(userContext)

const isUserFollowed = () =>{
  const followedUser = userData.following.find(item => item.username === username)
  return followedUser
}
  return (
    <>
      <div className="main-details">
        <img
          src={`${avatarUrl}`}
          alt=""
          srcSet=""
          width={"70px"}
          height={"70px"}
          style={{
            borderRadius: "50%",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
        <div className="login-user-details">
          <p><strong>Name : </strong>{`${firstName} ${lastName}`}</p>
          <p><strong>Username : </strong>@{`${username}`}</p>
          <p><strong>Bio : </strong>{bio}</p>
          <p><strong>Site : </strong><a href={website} target="_blank">{website}</a></p>
          <p><strong>Joined on :</strong> {createdAt?.slice(0, 10)}</p>
        </div>
        {userData.username === username ? <button className="edt-profile-btn">Edit profile</button> : isUserFollowed() ?<button className="edt-profile-btn" onClick={() => unFollowFunc(_id)}>Unfollow</button> : <button className="edt-profile-btn" onClick={() => followUsers(_id)}>Follow</button>}
      </div>

      <div className="stats-main">
        <h3>{postLen?.length} Posts</h3>
        <h3>{followers?.length} followers</h3>
        <h3>{following?.length} following</h3>
      </div>
    </>
  );
};

export default UserDetails;
