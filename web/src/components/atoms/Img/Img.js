import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

import img_default from "./../../../assets/img/person_default.png";

const Img = ({ src, title, loading }) => {
  return (
    <LazyLoad height={1000} width={1000}>
      <img
        loading={`${loading ? "lazy" : ""}`}
        src={`${!src ? img_default : src}`}
        alt={title}
      ></img>
    </LazyLoad>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default Img;
