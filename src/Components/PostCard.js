import React from "react";
import "../Styles/PostCard.css";
import { HeartOutline, ShareSocialOutline, BookmarkOutline, ChatboxEllipsesOutline } from "react-ionicons";
import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
const PostCard = ({ item }) => {
  const { userState } = useContext(userContext)

  const profilePicFunc = (currUsername) => {
    const matchedObj = userState?.allUsers.find((item) => item.username === currUsername)
    return matchedObj?.avatarUrl
  }

  return (
    <div className="single-post-main" key={item._id}>
      <div className="single-card-wrapper">
        <img
          src={profilePicFunc(item.username)}
          alt=""
          srcSet=""
          width={"50px"} height={"50px"} style={{ borderRadius: "50%", backgroundSize: "cover", objectFit: "cover" }}
        />
        <div className="post-details">
          <div className="user-post-details">
            <p>{item.username}</p>
            <p style={{ color: "lightgray" }}>{item.createdAt.slice(0, 10)}</p>
          </div>
          <div className="post-data">
            <p>
              {item.content}
            </p>
          </div>
        </div>
      </div>
      <div className="post-icons">
        <span className="likes-card">
        <HeartOutline color={"white"} height="30px" width="30px" /><span className="likes"><p>{item.likes.likeCount}</p></span>
        </span>
        <ChatboxEllipsesOutline color={"white"} height="30px" width="30px" />

        <ShareSocialOutline color={"white"} height="30px" width="30px" />

        <BookmarkOutline color={"white"} height="30px" width="30px" />
      </div>
    </div>
  );
};

export default PostCard;
