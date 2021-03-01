import React from "react";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Input from "../../atoms/Input/Input";
import "./SearchField.css";

import useSearchPosts from "./../../../hooks/useSearchPosts";

const SearchField = (props) => {
  const [data, setSearchPosts] = useSearchPosts();

  const handleChange = (e) => {
    setSearchPosts(e.value);
  };

  return (
    <div className="Search">
      <ButtonIcon></ButtonIcon>
      <Input
        type="text"
        id="searchQuery"
        name={props.name}
        placeholder="what do you search?"
        onChangeInput={handleChange}
      />
    </div>
  );
};

SearchField.defaultProps = {
  name: "searchQuery",
};

export default SearchField;
