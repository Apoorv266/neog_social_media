import React from 'react'
import { useState } from 'react'
import { uploadMedia } from '../MediaUpload/Media';
import Axios from 'axios';
import { useContext } from 'react';
import { postContext } from '../Contexts/PostContext';
const Addpost = () => {
    const [content, setcontent] = useState("")
    const [filename, setFilename] = useState("");
    const {createPostFunc} = useContext(postContext)

    const uploadImage = async () => {
        const res = await uploadMedia(filename)
        createPostFunc(content, res.url)
        setcontent("")
    };
    return (
        <div className="post-card-wrapper">
            <div className="post-card-main">
                <img
                    src={require("../Images/profile.png")}
                    alt=""
                    srcSet=""
                    width={"50px"}
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

            <input
                type="file"
                onChange={(e) => setFilename(e.target.files[0])}
            />
            <button onClick={uploadImage}>Post</button>

        </div>
    )
}

export default Addpost