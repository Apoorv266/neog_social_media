import React, { useContext } from "react";
import { postContext } from "../Contexts/PostContext";
import PostCard from "../Components/PostCard";
import { useEffect } from "react";

const Explore = () => {
  const { filterByDate, page, fetchPosts, setpage, elementRef, hasMore, sethasMore } = useContext(postContext);

  useEffect(() => {
    fetchPosts()
    setpage(1)
    sethasMore(true)
  }, [])

  const sortedData = filterByDate.slice(0, page * 5)

  return (
    <>
      <div className="post-container">
        {sortedData.map((item, index) => (
          <React.Fragment key={index}>
            <PostCard item={item} />
            {(index === sortedData.length - 1 && hasMore) && <div ref={elementRef} style={{ color: "white" }}>Loading...</div>}
          </React.Fragment>
        ))}
      </div>

    </>
  );
};

export default Explore;
