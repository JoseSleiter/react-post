import React from "react";
import propTypes from "prop-types";
import Img from "../../atoms/Img/Img";
import Link from "../../atoms/Link/Link";
import P from "../../atoms/P/P";

const CardPost = ({ post }) => {
  return (
    <div className="cardpost">
      <Link>
        <Img
          src={post.img.src}
          title={post.img.title}
          loading={post.img.loading}
        />
        <P text={post.description} />
      </Link>
    </div>
  );
};

CardPost.propTypes = {
  post: propTypes.object,
};

export default CardPost;
