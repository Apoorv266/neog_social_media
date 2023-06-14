import React from "react";
import "../Styles/PostCard.css";
import { HeartOutline, ShareSocialOutline, BookmarkOutline, ChatboxEllipsesOutline} from "react-ionicons";
const PostCard = () => {
  return (
    <div className="single-post-main">
      <div className="single-card-wrapper">
        <img
          src={require("../Images/profile.png")}
          alt=""
          srcset=""
          width={"50px"}
        />
        <div className="post-details">
          <div className="user-post-details">
            <p>Tanay Pratap</p>
            <p style={{color: "lightgray"}}>@tanaypratap</p>
          </div>
          <div className="post-data">
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus quiAt vero eos et accusamus et iusto odio dignissimos ducimus quiAt vero eos et accusamus et iusto odio dignissimos ducimus quiAt vero eos et accusamus et iusto odio dignissimos ducimus quiAt vero eos et accusamus et iusto odio dignissimos ducimus quid
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
