import React from "react";
import propTypes from "prop-types";
import CardPost from "../../molecules/CardPost/CardPost";
import P from "../../atoms/P/P";

const ListPosts = ({ posts }) => {
  // if (!posts.length) return <P text={"hola"} />;
  console.log(posts);
  return posts.map((post, key) => (
    <>
      <CardPost key={key} post={post}></CardPost>
    </>
  ));
};

ListPosts.propTypes = {
  posts: propTypes.array,
};

export default ListPosts;
