import React from "react";
import "../Styles/Rightbar.css";

const SuggUserCard = ({item}) => {
  return (
    <div className="sugg-User-Card-main">
      <img src={item.avatarUrl} alt="" width={"50px"} height={"50px"}style={{borderRadius: "50%" , backgroundSize: "cover", objectFit: "cover"}}/>
      <div className="user-details">
        <p>{item.firstName}{item.lastName}</p>
        <p>@{item.username}</p>
      </div>
      <div>

      <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default SuggUserCard;
