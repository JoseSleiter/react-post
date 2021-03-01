import React from "react";
import Button from "../../atoms/Button/Button";
import CardPost from "../../molecules/CardPost/CardPost";

const AdminListPost = (props) => {
  const fetchDeleted = () => {
    props.fetchDeleted();
  };
  const fetchUpdate = () => {
    // post.id
  };
  return props.posts.map((post) => (
    <CardPost post={post}>
      <Button text="Delete" handleClick={fetchDeleted}></Button>
      <Button text="Update" handleClick={fetchUpdate}></Button>
    </CardPost>
  ));
};

export default AdminListPost;
