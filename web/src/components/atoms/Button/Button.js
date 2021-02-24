import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// import icon from "./../../../assets/img/iconmonstr-trash-can-1.svg";

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  return (
    <div className="btn-content">
      <button onClick={handleClick} className="btn">
        <span className={`icon ${!props.icon ? "is-hidden" : ""}`}>
          {/* <img src={icon} alt="" /> */}
        </span>
        <span>{props.text}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
