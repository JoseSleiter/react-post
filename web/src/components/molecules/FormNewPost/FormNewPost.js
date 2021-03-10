import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

import "./FormNewPost.css";

const FormNewPost = (props) => {
  const handleClick = (e) => {
    console.log("send post");
    props.fetchCreatePost();
  };

  const handleChange = (input) => {
    props.handleChange(input);
  };

  return (
    <div className="FormNewPost">
      <h4 className="FormNewPost__Title">What do you think?</h4>
      <div className="FormNewPost__Content box">
        <div className="Form__Field form-group">
          <Input
            onChangeInput={handleChange}
            placeholder="Write your name post"
            name="title"
          ></Input>
        </div>
        <div className="Form__Field form-group">
          <Input
            onChangeInput={handleChange}
            placeholder="Write your post"
            name="description"
          ></Input>
        </div>
        <div className="Form__Field form-group">
          <Button
            handleClick={handleClick}
            id="SubmitLogin"
            name="SubmitLogin"
            text="send"
            className="Form__Field button btn btn-default button-medium"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FormNewPost;
