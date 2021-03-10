import React from "react";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Input from "../../atoms/Input/Input";
import "./SearchField.css";

const SearchField = () => {
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className="Search">
      <ButtonIcon></ButtonIcon>
      <Input
        type="text"
        placeholder="what do you search?"
        onChangeInput={handleChange}
      />
    </div>
  );
};

export default SearchField;
