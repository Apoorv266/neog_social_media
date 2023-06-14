import React from "react";
import "../Styles/MiddleBar.css";
import PostCard from "./PostCard";

const MiddleBar = () => {
  return (
    <>
      <div className="post-container">
        <div className="post-card-wrapper">
          <div className="post-card-main">
            <img
              src={require("../Images/profile.png")}
              alt=""
              srcset=""
              width={"50px"}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="whats on your mind!"
            ></textarea>
          </div>
          <button className="post-btn">Post</button>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default MiddleBar;
