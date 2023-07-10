import React, { useContext } from "react";
import "../Styles/MiddleBar.css";
import PostCard from "./PostCard";
import { postContext } from "../Contexts/PostContext";
import { authContext } from "../Contexts/AuthContext";
import Addpost from "./Addpost";
import EditPostModal from "./Modal/EditPostModal/EditPostModal";

const MiddleBar = () => {
  const {filterByDate, editpostModal} = useContext(postContext);
  const { authLoader,followUserList, userData } = useContext(authContext);
  const dispPost = filterByDate?.filter((item) => followUserList?.includes(item.username) || item.username === userData?.username).reverse()
  return (
    <>
      <div className="post-container">
       <Addpost/>
        {authLoader ? (
          <div className="loader-img-main">
            <img src={require("../Images/loader2.gif")} alt="" srcset="" width={"50px"}/>
          </div>
        ) : (
          <>
            {dispPost.length > 0 ? dispPost?.map((item) => {
              return <PostCard item={item} />;
            }) : <h1 className="empty-txt">No posts to display !</h1>}
          </>
        )}
      </div>
{editpostModal && <EditPostModal/>}
    </>
  );
};

export default MiddleBar;
