import React, { useContext, useEffect, useRef, useState } from 'react'
import { postContext } from '../../../Contexts/PostContext'
import { ImageOutline, CloseCircleOutline } from "react-ionicons";
import Picker from "emoji-picker-react";
import { uploadMedia } from '../../../Utils/Media';

const EditPostModal = () => {
  const { seteditpostModal, postState , postDispatch, editPostFunc} = useContext(postContext)
  const [showPicker, setShowPicker] = useState(false);
  const { postData: { content, fileTitle, media, id, fileUrl } } = postState
  const menuRef = useRef();

  const uploadImage = async () => {
    if (media) {
      const res = await uploadMedia(media);
      editPostFunc(id, content, res.url, res.original_filename);
    }else{
      editPostFunc(id, content, fileUrl, fileTitle);
    }
    seteditpostModal(false)
  };


  const onEmojiClick = (emojiObject) => {
    postDispatch({ type: "ADD_POST_CONTENT", payload: content + emojiObject.emoji })
    setShowPicker(false);
  };

  const handleUploadInput = (e) => {
    postDispatch({ type: "ADD_POST_MEDIA", payload: e.target.files[0] })
    e.target.value = "";
  };


  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  
  return (
    <div id="myModal" className="modal">

      <div className="modal-content">
      <span className="close" onClick={()=>seteditpostModal(false)}>X</span>
        <div className="post-card-wrapper">
          <div className="post-card-main">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="whats on your mind!"
            value={content}
            onChange={(e) => postDispatch({ type: "ADD_POST_CONTENT", payload: e.target.value })}
            ></textarea>
          </div>
          {/* ya to old file(fileTitle) present ho ya fhir new uploaded media ho */}
          {(fileTitle || media) &&  (
            <div className="media-title">
              <p>{!media ? fileTitle?.slice(0, 70) : media?.name?.slice(0, 70)}...</p>{" "}
              <CloseCircleOutline
                color={"#000000"}
                height="20px"
                width="20px"
                className="close-btn"
                onClick={() => postDispatch({ type: "REMOVE_ALL_MEDIA" })}
              />
            </div>
          )}

          <div className="utils-section" ref={menuRef}>
            {!showPicker ? (
              <>
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
                  onClick={() => setShowPicker((val) => !val)}
                  />
                </label>

                <button
                  onClick={uploadImage}
                  className="post-btn"
                disabled={!content.trim() && !media}
                >
                  Save
                </button>
              </>
            ) : (
              <div >
                <Picker
                  pickerStyle={{ width: "100%" }}
                  onEmojiClick={onEmojiClick}
                  theme="dark"
                />
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditPostModal