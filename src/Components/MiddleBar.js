import React, { useContext } from "react";
import "../Styles/MiddleBar.css";
import PostCard from "./PostCard";
import { postContext } from "../Contexts/PostContext";

const MiddleBar = () => {
  const {allPost} = useContext(postContext)
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
        {allPost?.map((item) =>{
          return <PostCard item={item}/>
        })}
      </div>
    </>
  );
};

export default MiddleBar;
