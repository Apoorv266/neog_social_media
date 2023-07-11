import React from "react";
import "../Styles/PostCard.css";
import {
  ThumbsUpOutline,
  ShareSocialOutline,
  BookmarkOutline,
  ChatboxEllipsesOutline,
  ThumbsUp,
  ThumbsDownOutline,
  ThumbsDown,
  TrashOutline,
  PencilOutline,
  Bookmark,
} from "react-ionicons";
import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
import { postContext } from "../Contexts/PostContext";
import { authContext } from "../Contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sharePost } from "../Utils/ShareLink";
import EditPostModal from "./Modal/EditPostModal/EditPostModal";

const PostCard = ({ item , fromBookmarks, fromsinglePost}) => {
  const { getUserAvatarImg } = useContext(userContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { userData } = useContext(authContext);
  const {
    isPostLiked,
    dislikePostFunc,
    isPostDisliked,
    likePostFunc,
    deletePostFunc,
    bookmarkFunc,
    removebookmarkFunc,
    isPostBookmarked,
    seteditpostModal,
    handleClickEdit,
    editpostModal
  } = useContext(postContext);


  const extensionData = ["webp", "jpg", "gif", "jpeg" , "png"]
  const mediaTypeFunc = (url) => {
    const extension = url?.split(".")?.pop();
    return extensionData.includes(extension)
  };

  const handleEditBtn = (id) => {
    handleClickEdit(id)
    seteditpostModal(true)
  }

  return (
    <div className="single-post-main" key={item?._id}>
      <div className="single-card-wrapper">
        <div className="user-Details">
          <div className="post-details">
            <img
              src={userData?.username === item?.username ? userData?.avatarUrl : getUserAvatarImg(item?.username)}
              alt=""
              srcSet=""
              width={"50px"}
              height={"50px"}
              style={{
                borderRadius: "50%",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="user-post-details">
            <Link
              to={`/profile/${item?.username}`}
              style={{ textDecoration: "none" }}
            >
              <p>{item?.username}</p>
            </Link>
            <p style={{ color: "lightgray" }}>{item?.createdAt.slice(0, 10)}</p>
          </div>
        </div>

        {!fromBookmarks && <div className="utils-icons">
          {userData?.username === item?.username ? (
            <>
              <TrashOutline
                color={"#ffffff"}
                height="20px"
                width="20px"
                onClick={() =>{
                  deletePostFunc(item?._id)
                  if (pathname !== "/" && fromsinglePost) {
                    navigate("/");
                  }
                } }
              />
              <PencilOutline color={"#ffffff"} height="20px" width="20px" onClick={() => handleEditBtn(item?._id)} />
            </>
          ) : (
            ""
          )}
        </div>}
      </div>

        <Link to={`/post/${item?._id}`} style={{ textDecoration: "none" }}>
      <div className="post-data">
          <p className="post-content">{item?.content}</p>
        
        {item?.mediaURL ? (
          mediaTypeFunc(item?.mediaURL) ? (
            <img src={item?.mediaURL} alt="" srcset="" width={"550px"} />
          ) : (
            <video width="550" controls>
              <source src={item?.mediaURL} type="video/mp4" />
            </video>
          )
        ) : (
          ""
        )}
      </div>
      </Link>
      
      <div className="post-icons">
        <span className="likes-card">
          {isPostLiked(item, userData) ? (
            <ThumbsUp color={"#ffffff"} height="30px" width="30px" />
          ) : (
            <ThumbsUpOutline
              color={"white"}
              height="30px"
              width="30px"
              onClick={() => likePostFunc(item?._id)}
            />
          )}
          <span className="likes">
            <p>{item?.likes.likeCount}</p>
          </span>
        </span>

        {isPostDisliked(item, userData) ? (
          <ThumbsDown color={"white"} height="30px" width="30px" />
        ) : (
          <ThumbsDownOutline
            color={"white"}
            height="30px"
            width="30px"
            onClick={() => dislikePostFunc(item?._id)}
          />
        )}

        <Link to={`/post/${item?._id}`} style={{ textDecoration: "none" }}>
          <ChatboxEllipsesOutline color={"white"} height="30px" width="30px" />
        </Link>

        
        <ShareSocialOutline color={"white"} height="30px" width="30px" onClick={() => sharePost(item._id)} />

        {isPostBookmarked(item?._id) ? (
          <Bookmark
            color={"white"}
            height="30px"
            width="30px"
            onClick={() => removebookmarkFunc(item?._id)}
          />
        ) : (
          <BookmarkOutline
            color={"white"}
            height="30px"
            width="30px"
            onClick={() => bookmarkFunc(item?._id)}
          />
        )}
      </div>
      {editpostModal && <EditPostModal />}
    </div>
  );
};

export default PostCard;
