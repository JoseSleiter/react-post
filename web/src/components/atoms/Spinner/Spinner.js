import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div
      id="spinner-modal-background"
      className={props.show ? "show-spinner" : "hidden-spinner"}
    >
      <div className="content-spinner">{props.text}</div>
    </div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
};

export default Spinner;
