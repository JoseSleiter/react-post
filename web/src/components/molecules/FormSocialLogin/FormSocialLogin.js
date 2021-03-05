import React from "react";
import Button from "../../atoms/Button/Button";

import ButtonFacebook from "../../atoms/ButtonFacebook/ButtonFacebook";
import ButtonGoogle from "../../atoms/ButtonGoogle/ButtonGoogle";

import "./FormSocialLogin.css";

const FormSocialLogin = (props) => {
  return (
    <div className="FormSocialLogin">
      <h4 className="FormSocialLogin__Title"></h4>
      <div className="FormSocialLogin__Content box">
        <div className="Form__Field form-group text-center">
          <ButtonFacebook></ButtonFacebook>
        </div>
        <div className="Form__Field form-group text-center">
          <ButtonGoogle></ButtonGoogle>
        </div>
      </div>
    </div>
  );
};

export default FormSocialLogin;
