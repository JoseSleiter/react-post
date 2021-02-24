import React from "react";
import FormRegister from "../../molecules/FormRegister/FormRegister";

const UserRegister = () => {
  const RegisterGoogle = () => {
    console.log("loginUser");
  };

  const RegisterFacebook = () => {
    console.log("loginUser");
  };

  return (
    <div className="UserRegister__Inner inner">
      <h2 class="page-subheading text-center">WELCOME TO OUR REGISTER!</h2>
      <FormRegister></FormRegister>
    </div>
  );
};

export default UserRegister;
