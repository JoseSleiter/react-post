import React from "react";
import FormLogin from "../../molecules/FormLogin/FormLogin";

const UserLogin = (props) => {
  const loginUser = () => {
    console.log("loginUser");
    props.loginUser();
  };

  const handleChange = (input) => {
    props.handleChange(input);
  };

  return (
    <div className="UserLogin__Inner inner">
      <h2 className="page-subheading text-center">WELCOME!</h2>
      <FormLogin
        handleSubmit={loginUser}
        handleChange={handleChange}
      ></FormLogin>
    </div>
  );
};

export default UserLogin;
