import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = (props) => {
  return (
    <a
      href={props.url}
      title={props.title}
      target="_blank"
      className="is-link"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

Link.defaultProps = {
  url: "#",
  title: "link",
};

Link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Link;
