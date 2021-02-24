import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = (props) => {
  if (props.type === "h1") {
    return (
      <>
        <h1 className="textT">{props.text}</h1>
      </>
    );
  }
  return (
    <>
      <h2 className="textS">{props.text}</h2>
    </>
  );
};

Title.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Title;
