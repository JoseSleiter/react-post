import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Link from "../../atoms/Link/Link";

import "./FormLogin.css";

const FormLogin = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send");
    props.handleSubmit();
  };

  return (
    <div className="FormLogin">
      <h4 class="FormLogin__Title">Already registered?</h4>
      <form onSubmit={handleSubmit} class="FormLogin__Form box">
        <div class="Form__Content clearfix">
          <div class="Form__Field form-group">
            <label htmlFor="email">Email address</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@gmail.com"
              class="is_required validate account_input form-control"
            ></Input>
          </div>
          <div class="Form__Field form-group">
            <label htmlFor="passwd">Password</label>
            <Input
              id="passwd"
              name="passwd"
              type="password"
              placeholder="your password"
              class="is_required validate account_input form-control"
            ></Input>
          </div>
          {/* <Link
            url="https://surkana.com/en/recuperacion-contrasena"
            title="Recover your forgotten password"
          >
            Forgot your password?
          </Link> */}
          <Button
            id="SubmitLogin"
            name="SubmitLogin"
            text="login"
            class="Form__Field button btn btn-default button-medium"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
