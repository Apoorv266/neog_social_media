import React from 'react'
import { useState } from 'react'
import { uploadMedia } from '../MediaUpload/Media';
import axios from "axios"
const Addpost = () => {
    const [content, setcontent] = useState("")
    const [filename, setFilename] = useState("");

    const onUploadClick = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("file", filename);
        data.append("upload_preset", "pfnc996n");
        console.log(data);

        fetch('https://api.cloudinary.com/v1_1/ducuco7mq/image/upload', {
            method: "post",
            body: data
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    };
    return (
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
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                ></textarea>
            </div>
            <form onSubmit={onUploadClick}>
                <input
                    type="file"
                    // visibility="hidden"
                    accept="image"
                    onChange={(e) => setFilename(e.target.files[0])}
                />
                <button className="post-btn" >Post</button>
            </form>
        </div>
    )
}

export default Addpost