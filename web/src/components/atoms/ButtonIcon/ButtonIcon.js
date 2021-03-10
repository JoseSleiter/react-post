import React from "react";
import PropTypes from "prop-types";
import "./ButtonIcon.css";
// import icon from "./../../../assets/img/iconmonstr-trash-can-1.svg";

const ButtonIcon = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  const onMouseEnter = () => {
    console.log("Event:MouseEnter");
  };

  return (
    <div className="btn-icon-content">
      <button
        onMouseEnter={onMouseEnter}
        onClick={handleClick}
        className="btn-icon"
      >
        <span
          className={`icon ${!props.icon ? "is-hidden" : props.icon}`}
        ></span>
      </button>
    </div>
  );
};

ButtonIcon.defaultProps = {
  handleClick: (e) => {},
  handleHover: (e) => {},
  handleLeaveHover: (e) => {},
  icon: "fa-search",
};

ButtonIcon.propTypes = {
  onMouseEnter: PropTypes.func,
  handleClick: PropTypes.func,
  icon: PropTypes.string,
};

export default ButtonIcon;
