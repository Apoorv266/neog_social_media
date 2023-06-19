import React, { useContext } from "react";
import "../Styles/MiddleBar.css";
import PostCard from "./PostCard";
import { postContext } from "../Contexts/PostContext";
import { authContext } from "../Contexts/AuthContext";

const MiddleBar = () => {
  const {filterByDate} = useContext(postContext);
  const { authLoader } = useContext(authContext);
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
        {authLoader ? (
          <div className="loader-img-main">
            <img src={require("../Images/loader2.gif")} alt="" srcset="" width={"50px"}/>
          </div>
        ) : (
          <>
            {filterByDate?.map((item) => {
              return <PostCard item={item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MiddleBar;
