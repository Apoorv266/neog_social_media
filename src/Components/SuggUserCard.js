import React from "react";
import "../Styles/Rightbar.css";

const SuggUserCard = () => {
  return (
    <div className="sugg-User-Card-main">
      <img src={require("../Images/profile.png")} alt="" width={"50px"} />
      <div className="user-details">
        <p>john doe</p>
        <p>@johndoe</p>
      </div>
      <div>

      <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default SuggUserCard;
