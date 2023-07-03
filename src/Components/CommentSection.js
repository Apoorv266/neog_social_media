import React from "react";
import "../Styles/Comment.css";
import { TrashOutline } from "react-ionicons";
import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
import { postContext } from "../Contexts/PostContext";
import { useState } from "react";
const CommentSection = ({comments, postId}) => {
    const {getUserAvatarImg} = useContext(userContext)
    const {addCommentFunc, deleteCommentFunc} = useContext(postContext)
    const [commentField, setcommentField] = useState("")

    const handleCommentBtn = () =>{
      setcommentField("")
      addCommentFunc(postId, commentField)
    }
  return (
    <div className="comment-main">
      <div className="user-comment">
        <input type="text" onChange={(e)=>setcommentField(e.target.value)} value={commentField}/>
        <button onClick={handleCommentBtn}>Post comment</button>
      </div>
      {comments.map((item) =>{
      return (
<div className="comments-list" key={item._id}>
        <div className="comment-user-details">
          <div className="comment-user-detail">
            <img src={getUserAvatarImg(item.username)} alt="" srcSet="" width={"40px"} height={"40px"} style={{ borderRadius: "50%", backgroundSize: "cover", objectFit: "cover" }} />
            <p>
              <strong>{item.username}</strong>
            </p>
            <p>@{item.username}</p>
          </div>
          <TrashOutline color={"#ffffff"} height="20px" width="20px" onClick={()=>deleteCommentFunc(postId, item._id)} />
        </div>
        <p className="comment-text" >{item.commentData}</p>
      </div>
      )
      
      })}
    </div>
  );
};

export default CommentSection;
