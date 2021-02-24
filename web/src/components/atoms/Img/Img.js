import React from "react";
import PropTypes from "prop-types";

const Img = ({ src, title, loading }) => {
  return (
    <img loading={`${loading ? "lazy" : ""}`} src={src} title={title}></img>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default Img;
