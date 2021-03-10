import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
// import Link from "../../atoms/Link/Link";

import "./FormLogin.css";

const FormLogin = (props) => {
  const handleSubmit = (e) => {
    console.log("send");
    props.handleSubmit();
  };

  const handleChange = (input) => {
    props.handleChange(input);
  };

  return (
    <div className="FormLogin">
      <h4 className="FormLogin__Title">Already registered?</h4>
      <form onSubmit={handleSubmit} className="FormLogin__Form box">
        <div className="Form__Content clearfix">
          <div className="Form__Field form-group">
            <label htmlFor="email">Email address</label>
            <Input
              onChangeInput={handleChange}
              id="email"
              name="email"
              type="email"
              placeholder="user@gmail.com"
              className="is_required validate account_input form-control"
            ></Input>
          </div>
          <div className="Form__Field form-group">
            <label htmlFor="password">Password</label>
            <Input
              onChangeInput={handleChange}
              id="password"
              name="password"
              type="password"
              placeholder="your password"
              className="is_required validate account_input form-control"
            ></Input>
          </div>
          {/* <Link
            url="https://surkana.com/en/recuperacion-contrasena"
            title="Recover your forgotten password"
          >
            Forgot your password?
          </Link> */}
          <Button
            handleClick={handleSubmit}
            id="SubmitLogin"
            name="SubmitLogin"
            text="login"
            className="Form__Field button btn btn-default button-medium"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
