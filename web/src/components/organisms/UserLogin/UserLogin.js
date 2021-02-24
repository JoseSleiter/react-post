import React from "react";
import FormLogin from "../../molecules/FormLogin/FormLogin";

const UserLogin = () => {
  const loginUser = () => {
    console.log("loginUser");
  };
  return (
    <div className="UserLogin__Inner inner">
      <h2 class="page-subheading text-center">WELCOME!</h2>
      <FormLogin handleSubmit={loginUser}></FormLogin>
    </div>
  );
};

export default UserLogin;
