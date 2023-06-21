import React from "react";
import "../Styles/PostCard.css";
import { ThumbsUpOutline, ShareSocialOutline, BookmarkOutline, ChatboxEllipsesOutline, ThumbsUp, ThumbsDownOutline ,ThumbsDown} from "react-ionicons";
import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
import { postContext } from "../Contexts/PostContext";
import { authContext } from "../Contexts/AuthContext";
const PostCard = ({ item }) => {
  const { userState } = useContext(userContext)
  const { userData } = useContext(authContext)
  const { isPostLiked, dislikePostFunc , isPostDisliked, likePostFunc} = useContext(postContext)

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
          {isPostLiked(item, userData) ? <ThumbsUp
            color={'#ffffff'}
            height="30px" width="30px"
          /> : <ThumbsUpOutline color={"white"} height="30px" width="30px" onClick={() => likePostFunc(item._id)} />}
          <span className="likes"><p>{item.likes.likeCount}</p>
          </span>
        </span>

        {isPostDisliked(item, userData) ? <ThumbsDown
          color={"white"} height="30px" width="30px"
        />: <ThumbsDownOutline
          color={"white"} height="30px" width="30px"
          onClick={()=>dislikePostFunc(item._id)}
        />}
        <ChatboxEllipsesOutline color={"white"} height="30px" width="30px" />

        <ShareSocialOutline color={"white"} height="30px" width="30px" />

        <BookmarkOutline color={"white"} height="30px" width="30px" />
      </div>
    </div>
  );
};

export default PostCard;
