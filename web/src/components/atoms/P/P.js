import React from "react";
import PropTypes from "prop-types";
import "./P.css";

const P = (props) => {
  return (
    <>
      <p className="textS">{unescape(props.text)}</p>
    </>
  );
};

P.propTypes = {
  text: PropTypes.string,
};

export default P;
