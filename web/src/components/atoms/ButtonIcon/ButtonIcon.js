import React from "react";
import PropTypes from "prop-types";
import "./ButtonIcon.css";
// import icon from "./../../../assets/img/iconmonstr-trash-can-1.svg";

const ButtonIcon = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  return (
    <div className="btn-content">
      <button onClick={handleClick} className="btn">
        <span
          className={`icon ${!props.icon ? "is-hidden" : props.icon}`}
        ></span>
      </button>
    </div>
  );
};

ButtonIcon.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.string,
};
export default ButtonIcon;
