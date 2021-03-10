import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// import icon from "./../../../assets/img/iconmonstr-trash-can-1.svg";

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  const handleHover = (e) => {
    e.preventDefault();
    props.handleHover();
  };

  const handleLeaveHover = (e) => {
    e.preventDefault();
    props.handleLeaveHover();
  };

  return (
    <div className="btn-content">
      <button
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        className="btn"
      >
        <span className={`icon ${!props.icon ? "is-hidden" : ""}`}>
          {/* <img src={icon} alt="" /> */}
        </span>
        <span>{props.text}</span>
      </button>
    </div>
  );
};

Button.defaultProps = {
  handleClick: (e) => {},
  handleHover: (e) => {},
  handleLeaveHover: (e) => {},
  text: "Buton",
};

Button.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
