import React from "react";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import "../../Styles/UserDetails.css";

const UserDetails = ({loggedUserPost}) => {
  const { userData } = useContext(authContext);
  const {followers,following , bio, firstName, lastName, username, website, createdAt} = userData
  return (
    <>
      <div className="main-details">
        <img
          src={`${userData.avatarUrl}`}
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
          <p><strong>Joined on :</strong> {createdAt.slice(0, 10)}</p>
        </div>
        <button className="edt-profile-btn">Edit profile</button>
      </div>

      <div className="stats-main">
        <h3>{loggedUserPost.length} Posts</h3>
        <h3>{followers.length} followers</h3>
        <h3>{following.length} following</h3>
      </div>
    </>
  );
};

export default UserDetails;
