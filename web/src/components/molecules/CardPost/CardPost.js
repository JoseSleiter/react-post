import React from "react";
import propTypes from "prop-types";
import Img from "../../atoms/Img/Img";
import Link from "../../atoms/Link/Link";
import P from "../../atoms/P/P";

const CardPost = ({ post, children }) => {
  return (
    <div className="cardpost">
      <Link>
        <Img src={post.img} title="img" loading={false} />
        <div>
          <P text={post.title} />
          <P text={post.description} />
        </div>
        <div className={`actionButtons ${!children ? "hidden" : "caca"}`}>
          {children}
        </div>
      </Link>
    </div>
  );
};

CardPost.propTypes = {
  post: propTypes.object,
};

export default CardPost;
