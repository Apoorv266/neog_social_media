import React from "react";
import { useState } from "react";
import { uploadMedia } from "../MediaUpload/Media";
import { useContext } from "react";
import { postContext } from "../Contexts/PostContext";
import { ImageOutline, CloseCircleOutline } from "react-ionicons";
import { authContext } from "../Contexts/AuthContext";
const Addpost = () => {
  const [content, setcontent] = useState("");
  const [filename, setFilename] = useState('');
  const { createPostFunc } = useContext(postContext);
  const { userData } = useContext(authContext);

  const uploadImage = async () => {
    const res = await uploadMedia(filename);
    createPostFunc(content, res.url);
    setcontent("");
  };

  const handleUploadInput = (e) =>{
    setFilename(e.target.files[0])
    e.target.value = ''
  }

  return (
    <div className="post-card-wrapper">
      <div className="post-card-main">
        <img
          src={userData?.avatarUrl}
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
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="whats on your mind!"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>
      </div>
      {filename && <div className="media-title">
        <p>{filename?.name?.slice(0, 70)}...</p>{" "}
        <CloseCircleOutline color={"#000000"} height="20px" width="20px" className="close-btn" onClick={()=>setFilename('')}/>
      </div>}

      <div className="utils-section">
        <label>
          <input
            type="file"
            className="hidden"
            onChange={handleUploadInput}
          />
          <ImageOutline
            color={"#ffffff"}
            height="30px"
            width="30px"
            title={"Add image/video/gif"}
          />
        </label>

        <label>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"
            alt=""
            srcset=""
            height="30px"
            width="30px"
            title={"Add emoji"}
          />
        </label>
        <button
          onClick={uploadImage}
          className="post-btn"
          disabled={!content.trim() && !filename}
          
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Addpost;
