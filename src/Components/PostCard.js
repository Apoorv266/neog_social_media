import React from "react";
import "../Styles/PostCard.css";
import { HeartOutline, ShareSocialOutline, BookmarkOutline, ChatboxEllipsesOutline} from "react-ionicons";
const PostCard = ({item}) => {
  return (
    <div className="single-post-main" key={item._id}>
      <div className="single-card-wrapper">
        <img
          src={require("../Images/profile.png")}
          alt=""
          srcset=""
          width={"50px"}
        />
        <div className="post-details">
          <div className="user-post-details">
            <p>{item.username}</p>
            <p style={{color: "lightgray"}}>{item.createdAt.slice(0, 10)}</p>
          </div>
          <div className="post-data">
            <p>
           {item.content}
            </p>
          </div>
        </div>
      </div>
      <div className="post-icons">
        <HeartOutline color={"white"} height="30px" width="30px" />

        <ChatboxEllipsesOutline color={"white"} height="30px" width="30px" />

        <ShareSocialOutline color={"white"} height="30px" width="30px" />

        <BookmarkOutline color={"white"} height="30px" width="30px" />
      </div>
    </div>
  );
};

export default PostCard;
