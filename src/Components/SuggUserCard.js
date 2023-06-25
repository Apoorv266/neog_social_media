import React, { useContext } from "react";
import "../Styles/Rightbar.css";
import { userContext } from "../Contexts/UserContext";

const SuggUserCard = ({item}) => {
  const {followUsers} = useContext(userContext)
  return (
    <div className="sugg-User-Card-main" key={item._id}>
      <img src={item.avatarUrl} alt="" width={"50px"} height={"50px"}style={{borderRadius: "50%" , backgroundSize: "cover", objectFit: "cover"}}/>
      <div className="user-details">
        <p>{item.firstName}{item.lastName}</p>
        <p>@{item.username}</p>
      </div>
      <div>

      <button className="follow-btn" onClick={()=>followUsers(item._id)}>Follow</button>
      </div>
    </div>
  );
};

export default SuggUserCard;
