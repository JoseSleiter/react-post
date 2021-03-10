import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Link from "../../atoms/Link/Link";

import "./FormRegister.css";

const FormRegister = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send");
    props.handleSubmit();
  };

  return (
    <div className="FormRegister">
      <h4 class="FormRegister__Title">You can register here!</h4>
      <div class="FormRegister__Content box">
        <div class="Form__Field form-group">
          <Button
            id="SubmitLogin"
            name="SubmitLogin"
            text="login"
            class="Form__Field button btn btn-default button-medium"
          ></Button>
        </div>
        <div class="Form__Field form-group">
          <Button
            id="SubmitLogin"
            name="SubmitLogin"
            text="login"
            class="Form__Field button btn btn-default button-medium"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
