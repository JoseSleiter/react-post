import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ id, name, type, placeholder, onChangeInput }) => {
  const handleChange = (e) => {
    let input = e.target;
    onChangeInput(input);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
      ></input>
    </>
  );
};

Input.defaultProps = {
  id: "",
  name: "",
  type: "text",
  placeholder: "what do you search?",
  onChangeInput: () => {},
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
};

export default Input;
