import React, { useContext } from "react";
import { postContext } from "../Contexts/PostContext";
import PostCard from "./PostCard";

const Explore = () => {
  const { filterByDate } = useContext(postContext);
  return (
    <>
      <div className="post-container">
        {filterByDate?.map((item) => {
          return <PostCard item={item} />;
        })}
      </div>
    </>
  );
};

export default Explore;
