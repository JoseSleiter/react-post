import React from "react";
import propTypes from "prop-types";
import CardPost from "../../molecules/CardPost/CardPost";

const ListPosts = ({ posts }) => {
  return posts.map((post) => (
    <>
      <CardPost post={post}></CardPost>
    </>
  ));
};

ListPosts.propTypes = {
  posts: propTypes.array,
};

export default ListPosts;
