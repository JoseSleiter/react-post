import React from "react";

import "./Link.css";

const Link = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      className="is-link"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default Link;
