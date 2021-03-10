import React from "react";
import Button from "../../atoms/Button/Button";
import CardPost from "../../molecules/CardPost/CardPost";

const AdminListPost = (props) => {
  return props.posts.map((post) => (
    <CardPost post={post}>
      <Button text="Delete"></Button>
      <Button text="Update">x</Button>
    </CardPost>
  ));
};

export default AdminListPost;
