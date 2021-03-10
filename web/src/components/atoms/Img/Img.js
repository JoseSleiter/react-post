import React from "react";
import PropTypes from "prop-types";
import img_default from "./../../../assets/img/person_default.png";

const Img = ({ src, title, loading }) => {
  return (
    <img
      loading={`${loading ? "lazy" : ""}`}
      src={`${!src ? img_default : src}`}
      alt={title}
    ></img>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default Img;
